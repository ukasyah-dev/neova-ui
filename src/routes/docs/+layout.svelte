<script lang="ts">
	import { Container } from '$lib';
	import MainHeader from '../MainHeader.svelte';
	import DocsSidebar from './DocsSidebar.svelte';
</script>

<MainHeader />

<Container class="flex gap-10">
	<div class="w-56">
		<DocsSidebar />
	</div>
	<div class="flex-1 prose prose-neutral max-w-2xl dark:prose-invert">
		<slot />
	</div>
</Container>
