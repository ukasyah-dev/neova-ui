import { error } from '@sveltejs/kit';
import { capitalCase, kebabCase, pascalCase } from 'change-case';
import type { SvelteComponent } from 'svelte';

export type ComponentFile = {
	default: SvelteComponent;
};

export type ComponentResolver = () => Promise<ComponentFile>;

export type Component = { name: string; slug: string; resolver: ComponentResolver };

export type ComponentGroup = {
	name: string;
	slug: string;
	components: Component[];
};

export const getComponentGroups = async (): Promise<ComponentGroup[]> => {
	const modules = import.meta.glob('/src/lib/components/**/*.d.svx');

	let componentGroups: Record<string, ComponentGroup> = {};

	for (const [path, resolver] of Object.entries(modules)) {
		const segments = path.split('/');
		const groupSlug = segments[segments.length - 2];
		const groupName = capitalCase(groupSlug);
		const componentSlug = kebabCase(segments[segments.length - 1].replace('.d.svx', ''));
		const componentName = pascalCase(componentSlug);

		if (groupSlug in componentGroups) {
			componentGroups[groupSlug].components.push({
				name: componentName,
				slug: componentSlug,
				resolver: resolver as ComponentResolver
			});
		} else {
			componentGroups[groupSlug] = {
				name: groupName,
				slug: groupSlug,
				components: [
					{
						name: componentName,
						slug: componentSlug,
						resolver: resolver as ComponentResolver
					}
				]
			};
		}
	}

	// Transform componentGroups to array
	let arrComponentGroups: ComponentGroup[] = [];
	for (const group of Object.values(componentGroups)) {
		arrComponentGroups.push(group);
	}

	return arrComponentGroups;
};

export const getComponent = async (group: string, slug: string) => {
	const componentGroups = await getComponentGroups();

	const g = componentGroups.find((g) => g.slug === group);
	if (!g) {
		error(404);
	}

	const c = g.components.find((c) => c.slug === slug);
	if (!c) {
		error(404);
	}

	const component: any = await c.resolver();

	return {
		name: g.name + ' - ' + c.name,
		component: component.default
	};
};
