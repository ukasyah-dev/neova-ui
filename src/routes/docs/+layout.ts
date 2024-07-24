import type { LayoutLoad } from './$types';
import { getComponentGroups } from './components/utils';
import { getExampleGroups } from './examples/utils';

export const load: LayoutLoad = async () => {
	const componentGroups = await getComponentGroups();
	const exampleGroups = await getExampleGroups();

	return { componentGroups, exampleGroups };
};
