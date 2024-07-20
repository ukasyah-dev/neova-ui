<script lang="ts">
	import { NeovaProvider } from '$lib';
	import '$lib/styles.css';
</script>

<svelte:head>
	<title>Neova UI</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-coldark-dark.min.css"
	/>
</svelte:head>

<NeovaProvider>
	<slot />
</NeovaProvider>
