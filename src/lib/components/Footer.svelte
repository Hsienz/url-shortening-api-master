<script lang="ts">
	import { lists } from "../data/lists";
	import List from "./List.svelte";
	import Share from "./Share.svelte";
</script>

<div
	class="bg-Very_Dark_Violet text-center flex flex-col md:flex-row md:justify-around md:items-start items-center gap-8 py-8 px-4"
>
	<h2 class="text-white text-3xl font-bold">Shortly</h2>
	<div class="flex flex-col md:flex-row gap-[inherit]">
		{#each lists as item}
			<!-- content here -->
			<List props={item} />
		{/each}
	</div>
	<Share />
</div>
