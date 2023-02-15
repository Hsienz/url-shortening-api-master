<script lang="ts">
	import { cards } from "../data/cards";
	import Card from "./Card.svelte";
</script>

<div>
	<h2>Advanced Statistics</h2>
	<p>
		Track how your links are performing across the web with our advanced
		statistics dashboard.
	</p>

	<div>
		{#each cards as item}
			<!-- content here -->
            <Card props={item}/>
		{/each}
	</div>
</div>
