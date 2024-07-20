<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLButtonAttributes & {
		href?: string;
		variant?: 'default' | 'primary';
	};

	export let href: $$Props['href'] = '';
	export let variant: $$Props['variant'] = 'default';

	const { class: className, ...rest } = $$restProps;

	$: _class = twMerge(
		'font-medium leading-none flex items-center gap-1 rounded-md',
		'px-5 h-11',
		variant === 'default' && 'dark:bg-neutral-800 dark:text-neutral-200',
		variant === 'primary' && 'dark:bg-blue-600 dark:text-neutral-100',
		className
	);
</script>

{#if href}
	<a {href} class={_class} {...rest}>
		<slot />
	</a>
{:else}
	<button class={_class} {...rest}>
		<slot />
	</button>
{/if}
