<script lang="ts">
	import type { tList } from "$lib/types/list";

	export let props: tList;
</script>

<section class="flex flex-col gap-6">
	<h3 class="font-bold text-white">{props.title}</h3>
	<div class="flex flex-col gap-4">
		{#each props.child as item}
			<!-- content here -->
			<a href={"#"}>{item}</a>
		{/each}
	</div>
</section>
