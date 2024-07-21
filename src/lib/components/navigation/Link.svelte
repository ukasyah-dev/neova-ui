<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLAnchorAttributes;

	const { class: className, href, ...rest } = $$restProps;
</script>

<a {href} class={twMerge('font-medium leading-none', 'dark:text-blue-300', className)} {...rest}>
	<slot />
</a>
