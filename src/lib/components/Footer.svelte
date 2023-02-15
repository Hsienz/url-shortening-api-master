<script lang="ts">
	import { lists } from "../data/lists";
	import List from "./List.svelte";
	import Share from "./Share.svelte";
</script>

<div class="bg-Very_Dark_Violet text-center flex flex-col items-center gap-8 py-8 px-4">
	<h2 class="text-white text-3xl font-bold">Shortly</h2>
	{#each lists as item}
		<!-- content here -->
        <List props={item}/>
	{/each}
    <Share />
</div>
