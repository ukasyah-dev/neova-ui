<script lang="ts">
	import type { HTMLHtmlAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLHtmlAttributes;

	const { class: className, ...rest } = $$restProps;

	$: _class = twMerge(
		'not-prose my-8 px-4 py-8 gap-2.5',
		'min-h-[10rem] rounded-lg',
		'border dark:border-neutral-700/60',
		'flex flex-col items-center justify-center',
		className
	);
</script>

<div class={_class} {...rest}>
	<slot />
</div>
