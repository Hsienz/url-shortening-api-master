<script lang="ts">
	import type { tHistory } from "$lib/types/history";
	import Button from "./Button.svelte";

	export let history: tHistory;
	export let isSelected: () => boolean;
	export let click: () => void;
	let copy = () => {
		click();
		navigator.clipboard.writeText(history.shortenUrl);
	};
</script>

<div
	class="bg-white rounded-lg p-4 flex flex-col gap-4 lg:justify-between lg:items-center lg:flex-row"
>
	<a
		href={history.url}
		class="text-Very_Dark_Violet text-ellipsis overflow-hidden whitespace-nowrap"
		>{history.url}</a
	>
	<hr class="lg:hidden" />
	<div class="flex flex-col gap-[inherit] lg:flex-row lg:items-center">
		<a href={history.shortenUrl} class="text-Cyan">{history.shortenUrl}</a>
		<Button
			content={`${isSelected() ? "Copied!" : "Copy"}`}
			class={`py-2 rounded-lg lg:w-32 ${
				isSelected() ? "!bg-Dark_Violet !text-white" : ""
			}`}
			click={copy}
		/>
	</div>
</div>
