<script lang="ts">
	import { Container } from '$lib';
	import MainHeader from '../MainHeader.svelte';
	import type { LayoutData } from './$types';
	import DocsSidebar from './DocsSidebar.svelte';

	export let data: LayoutData;
</script>

<MainHeader />

<Container class="pb-14">
	<div class="w-[12.75rem] fixed top-24 bottom-0 overflow-y-auto">
		<DocsSidebar componentGroups={data.componentGroups} />
	</div>
	<div class="ml-56 pl-12 prose prose-neutral max-w-3xl dark:prose-invert">
		<slot />
	</div>
</Container>
