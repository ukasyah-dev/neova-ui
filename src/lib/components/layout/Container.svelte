<script lang="ts">
	import type { HTMLHtmlAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLHtmlAttributes;

	const { class: className, ...rest } = $$restProps;

	$: _class = twMerge('w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8', className);
</script>

<div class={_class} {...rest}>
	<slot />
</div>
