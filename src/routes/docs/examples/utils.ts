import { error } from '@sveltejs/kit';
import { sentenceCase, kebabCase } from 'change-case';
import type { SvelteComponent } from 'svelte';

export type ExampleIndexFile = {
	default: SvelteComponent;
};

export type ExampleResolver = () => Promise<ExampleIndexFile>;

export type Example = { name: string; slug: string; resolver: ExampleResolver };

export type ExampleGroup = {
	name: string;
	slug: string;
	examples: Example[];
};

export const getExampleGroups = async (): Promise<ExampleGroup[]> => {
	const modules = import.meta.glob('/src/examples/**/index.svelte');

	let exampleGroups: Record<string, ExampleGroup> = {};

	for (const [path, resolver] of Object.entries(modules)) {
		const segments = path.split('/');
		const exampleGroup = segments[segments.length - 3];
		const example = kebabCase(segments[segments.length - 2]);

		if (exampleGroup in exampleGroups) {
			exampleGroups[exampleGroup].examples.push({
				name: sentenceCase(example),
				slug: example,
				resolver: resolver as ExampleResolver
			});
		} else {
			exampleGroups[exampleGroup] = {
				name: sentenceCase(exampleGroup),
				slug: exampleGroup,
				examples: [
					{
						name: sentenceCase(example),
						slug: example,
						resolver: resolver as ExampleResolver
					}
				]
			};
		}
	}

	// Transform examples to array
	let result: ExampleGroup[] = [];
	for (const group of Object.values(exampleGroups)) {
		result.push(group);
	}

	return result;
};

export const getExample = async (ExampleGroup: string, slug: string) => {
	const exampleGroups = await getExampleGroups();

	const g = exampleGroups.find((g) => g.slug === ExampleGroup);
	if (!g) {
		error(404);
	}

	const e = g.examples.find((e) => e.slug === slug);
	if (!e) {
		error(404);
	}

	const example: any = await e.resolver();

	return {
		name: g.name + ' - ' + e.name,
		example: example.default
	};
};
