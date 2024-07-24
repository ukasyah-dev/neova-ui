import type { PageLoad } from './$types';
import { getCategories } from '../../examples/utils';

export const load: PageLoad = async ({}) => {
	const categories = await getCategories();

	return { categories };
};
