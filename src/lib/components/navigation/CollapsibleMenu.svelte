<script lang="ts">
	import { twJoin, twMerge } from 'tailwind-merge';
	import Button from './Button.svelte';
	import { Icon, ChevronDown } from 'svelte-hero-icons';

	type $$Props = {
		title: string;
		open?: boolean;
		items: { title: string; href?: string }[];
		buttonClassName?: string;
		itemClassName?: string;
	};

	export let title: $$Props['title'];
	export let open: $$Props['open'] = false;
	export let items: $$Props['items'] = [];
	export let buttonClassName: $$Props['buttonClassName'] = '';
	export let itemClassName: $$Props['itemClassName'] = '';
</script>

<Button
	size="sm"
	variant="transparent"
	onClick={() => (open = !open)}
	class={twMerge('w-full', buttonClassName)}
>
	{title}

	<div class={twJoin('ml-auto transition-transform', open && 'rotate-180')}>
		<Icon src={ChevronDown} class="w-3.5 h-3.5 stroke-[2]" />
	</div>
</Button>

{#if open}
	<div class="relative pl-6">
		<div class="absolute left-4 w-[1px] inset-y-0 dark:bg-neutral-700/80" />
		{#each items as item}
			<div class="flex items-stretch justify-stretch gap-3">
				<Button
					href={item.href}
					size="sm"
					variant="transparent"
					class={twMerge('w-full', itemClassName)}
				>
					{item.title}
				</Button>
			</div>
		{/each}
	</div>
{/if}
