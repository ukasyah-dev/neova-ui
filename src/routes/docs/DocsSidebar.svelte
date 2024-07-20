<script lang="ts">
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
			<h3 class="text-xs font-medium dimmed uppercase mb-3.5">{groupedItem.title}</h3>
			<div class="flex flex-col gap-3.5">
				{#each groupedItem.items as item}
					<a href={item.href} class="text-sm font-medium">{item.title}</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
