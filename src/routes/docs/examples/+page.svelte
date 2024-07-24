<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Examples</h1>

<p>Here are some examples of how to use Neova UI.</p>

{#each data.exampleGroups as group}
	<h2>{group.name}</h2>

	<ul>
		{#each group.examples as example}
			<li>
				<a href={`/examples/${group.slug}/${example.slug}`}>
					{example.name}
				</a>
			</li>
		{/each}
	</ul>
{/each}
