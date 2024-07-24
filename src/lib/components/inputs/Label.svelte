<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLLabelAttributes;

	const { class: className, ...rest } = $$restProps;

	$: _class = twMerge('block font-medium mb-1.5 text-neutral-900 dark:text-neutral-200', className);
</script>

<label class={_class} {...rest}>
	<slot />
</label>
