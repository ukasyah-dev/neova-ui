<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { twJoin, twMerge } from 'tailwind-merge';

	type $$Props = HTMLButtonAttributes & {
		active?: boolean;
		href?: string;
		size?: 'sm' | 'md';
		variant?: 'default' | 'primary' | 'transparent';
	};

	export let active: $$Props['active'] = false;
	export let href: $$Props['href'] = '';
	export let size: $$Props['size'] = 'md';
	export let variant: $$Props['variant'] = 'default';

	const { class: className, ...rest } = $$restProps;

	$: _class = twMerge(
		'font-medium leading-none flex items-center gap-1 rounded-md',
		size === 'sm' && 'px-3.5 h-10 text-sm',
		size === 'md' && 'px-5 h-11 text-base',
		variant === 'default' && 'dark:bg-neutral-700/60 dark:text-neutral-200',
		variant === 'primary' && 'dark:bg-blue-300 dark:text-neutral-950',
		variant === 'transparent' &&
			twJoin(
				!active && 'dark:hover:bg-neutral-800',
				active && 'dark:bg-blue-500/10 dark dark:text-blue-300'
			),
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
