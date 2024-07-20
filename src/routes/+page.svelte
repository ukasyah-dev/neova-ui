<script lang="ts">
	import { Button, Container } from '$lib';
	import MainHeader from './MainHeader.svelte';
</script>

<MainHeader />

<Container>
	<div class="py-32 text-center">
		<h1 class="text-4xl font-semibold mb-3">Develop Svelte Apps Faster</h1>
		<p class="dimmed text-lg max-w-xl mx-auto mb-6">
			Simplify your web development with this comprehensive library of versatile and responsive
			Svelte UI components.
		</p>

		<div class="flex justify-center gap-3">
			<Button href="/docs/getting-started" variant="primary">Get started</Button>
			<Button href="/">Browse examples</Button>
		</div>
	</div>
</Container>
