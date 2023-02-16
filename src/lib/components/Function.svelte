<script lang="ts">
	import { cards } from "../data/cards";
	import Card from "./Card.svelte";
</script>

<div class="text-center flex flex-col gap-24">
	<div class="flex flex-col gap-8">
		<h2 class="text-Very_Dark_Violet text-2xl font-bold">
			Advanced Statistics
		</h2>
		<p>
			Track how your links are performing across the web with our advanced
			statistics dashboard.
		</p>
	</div>

	<div class="relative">
		<div class="h-full w-2 bg-Cyan absolute left-1/2 -translate-x-1/2"></div>
		<div class="flex flex-col gap-24 z-10 relative">
			{#each cards as item}
				<!-- content here -->
				<Card props={item} />
			{/each}
		</div>
	</div>
</div>
