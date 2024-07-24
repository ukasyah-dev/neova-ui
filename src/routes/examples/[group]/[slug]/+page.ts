import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getExample } from '../../../docs/examples/utils';

export const load: PageLoad = async ({ params, parent }) => {
	const data = await parent();

	const example = await getExample(params.group, params.slug);
	if (!example) {
		error(404);
	}

	return { ...data, ...example };
};
