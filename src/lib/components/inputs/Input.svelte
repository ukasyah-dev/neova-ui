<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twJoin, twMerge } from 'tailwind-merge';

	type $$Props = Omit<HTMLInputAttributes, 'size' | 'value'> & {
		size?: 'sm' | 'md';
		value?: string;
		hasError?: boolean;
	};

	export let size: $$Props['size'] = 'md';
	export let value: $$Props['value'] = '';
	export let hasError: $$Props['hasError'] = false;

	const { class: className, ...rest } = $$restProps;
</script>

<div class={twMerge('relative', className)}>
	<input
		class={twJoin(
			size === 'sm' && 'px-4 h-10 text-sm',
			size === 'md' && 'px-5 h-11 text-base',
			'w-full rounded-md',
			'dark:bg-neutral-700/50 dark:placeholder-neutral-400',
			'border-0 ring-1 ring-inset ring-neutral-400',
			'focus:ring-1 focus:ring-inset',
			'dark:ring-neutral-700/80 dark:focus:ring-blue-300',
			hasError && 'dark:ring-red-400 dark:focus:ring-red-400'
		)}
		{...rest}
		bind:value
	/>
</div>
