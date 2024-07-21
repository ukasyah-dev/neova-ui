import { getComponent } from '../../utils';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const data = await parent();
	const component = await getComponent(params.group, params.slug);

	return { ...data, ...component };
};
