import type { LayoutLoad } from './$types';
import { getComponentGroups } from './components/utils';

export const load: LayoutLoad = async () => {
	const componentGroups = await getComponentGroups();

	return { componentGroups };
};
