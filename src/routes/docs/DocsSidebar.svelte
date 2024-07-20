<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib';

	const groupedItems = [
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
		}
	];
</script>

<div class="flex flex-col gap-9">
	{#each groupedItems as groupedItem}
		<div>
			<h3 class="text-xs font-medium dimmed uppercase mb-3">{groupedItem.title}</h3>
			<div class="flex flex-col gap-1 -mx-2.5">
				{#each groupedItem.items as item}
					<Button
						href={item.href}
						class="px-2.5 h-9"
						size="sm"
						active={$page.url.pathname === item.href}
						variant="transparent"
					>
						{item.title}
					</Button>
				{/each}
			</div>
		</div>
	{/each}
</div>
