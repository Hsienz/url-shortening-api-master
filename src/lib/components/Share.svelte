<script lang="ts">
	import { shareIcons } from "../data/shareIcons";
	import ShareIcon from "./ShareIcon.svelte";
</script>

<div class="flex gap-6">
	{#each shareIcons as item}
		<!-- content here -->
		<ShareIcon props={item} />
	{/each}
</div>
