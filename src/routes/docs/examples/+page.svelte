<script lang="ts">
	import MainHeader from '../../MainHeader.svelte';
	import type { PageData } from '../../examples/$types';

	export let data: PageData;
</script>

<MainHeader />

<pre>{JSON.stringify(data, null, 2)}</pre>
