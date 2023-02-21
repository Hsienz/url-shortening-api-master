<script lang="ts">
	import { cards } from "../data/cards";
	import Card from "./Card.svelte";
	const cardsOffset = ["mt-0", "mt-8", "mt-16"];
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
		<div
			class="h-full w-2 bg-Cyan absolute left-1/2 -translate-x-1/2 xl:h-2 xl:w-full xl:top-1/2 xl:left-0 xl:-translate-x-0"

		/>
		<div class="flex flex-col gap-24 xl:gap-8 z-10 relative xl:flex-row xl:justify-between">
			{#each cards as item,i}
				<!-- content here -->
				<div class={`${cardsOffset[i]} mx-auto xl:mx-0`}><Card props={item} /></div>
			{/each}
		</div>
	</div>
</div>
