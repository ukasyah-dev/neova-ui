<script lang="ts">
	import { Container } from '$lib';
	import MainHeader from '../MainHeader.svelte';
	import DocsSidebar from './DocsSidebar.svelte';
</script>

<MainHeader />

<Container class="pb-14">
	<div class="w-48 fixed top-24">
		<DocsSidebar />
	</div>
	<div class="ml-56 pl-9 prose prose-neutral max-w-2xl dark:prose-invert">
		<slot />
	</div>
</Container>
