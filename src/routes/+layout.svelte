<script lang="ts">
	import { NeovaProvider } from '$lib';
	import '$lib/styles.css';
</script>

<svelte:head>
	<title>Neova UI</title>
</svelte:head>

<NeovaProvider>
	<slot />
</NeovaProvider>
