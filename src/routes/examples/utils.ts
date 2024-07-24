import { error } from '@sveltejs/kit';
import { sentenceCase, kebabCase } from 'change-case';
import type { SvelteComponent } from 'svelte';

export type ExampleIndexFile = {
	default: SvelteComponent;
};

export type ExampleResolver = () => Promise<ExampleIndexFile>;

export type Example = { name: string; slug: string; resolver: ExampleResolver };

export type Category = {
	name: string;
	slug: string;
	examples: Example[];
};

export const getCategories = async (): Promise<Category[]> => {
	const modules = import.meta.glob('/src/examples/**/index.svelte');

	let categories: Record<string, Category> = {};

	for (const [path, resolver] of Object.entries(modules)) {
		const segments = path.split('/');
		const category = segments[segments.length - 3];
		const example = kebabCase(segments[segments.length - 2]);

		if (category in categories) {
			categories[category].examples.push({
				name: sentenceCase(example),
				slug: example,
				resolver: resolver as ExampleResolver
			});
		} else {
			categories[category] = {
				name: kebabCase(category),
				slug: category,
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
	let result: Category[] = [];
	for (const group of Object.values(categories)) {
		result.push(group);
	}

	return result;
};

export const getExample = async (category: string, slug: string) => {
	const categories = await getCategories();

	const c = categories.find((c) => c.slug === category);
	if (!c) {
		error(404);
	}

	const e = c.examples.find((e) => e.slug === slug);
	if (!e) {
		error(404);
	}

	const example: any = await e.resolver();

	return {
		name: c.name + ' - ' + e.name,
		example: example.default
	};
};
