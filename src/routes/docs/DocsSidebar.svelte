<script lang="ts">
	import { page } from '$app/stores';
	import { Button, CollapsibleMenu } from '$lib';
	import type { ComponentGroup } from './components/utils';

	export let componentGroups: ComponentGroup[];

	type GroupedItem = {
		title: string;
		href?: string;
		items: {
			title: string;
			href?: string;
			items?: { title: string; href?: string }[];
		}[];
	};

	const groupedItems: GroupedItem[] = [
		{
			title: 'General',
			items: [
				{
					title: 'Introduction',
					href: '/docs/introduction'
				},
				{
					title: 'Getting started',
					href: '/docs/getting-started'
				}
			]
		},
		{
			title: 'Components',
			items: componentGroups.map((g) => {
				return {
					title: g.name,
					items: g.components.map((c) => {
						return {
							title: c.name,
							href: `/docs/components/${g.slug}/${c.slug}`
						};
					})
				};
			})
		},
		{
			title: 'Examples',
			items: [
				{
					title: 'Authentication',
					items: []
				},
				{
					title: 'Dashboard',
					items: []
				},
				{
					title: 'E-commerce',
					items: []
				}
			]
		}
	];
</script>

<div class="flex flex-col gap-9 pl-2.5 pr-3.5 pb-3">
	{#each groupedItems as groupedItem}
		<div>
			<h3 class="text-xs font-medium dimmed uppercase mb-3">{groupedItem.title}</h3>
			<div class="flex flex-col gap-1 -mx-2.5">
				{#each groupedItem.items as item}
					{@const active = Boolean(item.href) && $page.url.pathname === item.href}
					{#if item.items}
						<CollapsibleMenu
							title={item.title}
							items={item.items}
							buttonClassName="px-2.5 h-9"
							itemClassName="px-2.5 h-9"
						/>
					{:else}
						<Button
							href={item.href}
							class="px-2.5 h-9"
							size="sm"
							variant={active ? 'secondary' : 'transparent'}
						>
							{item.title}
						</Button>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</div>
