<script lang="ts">
	import type { tHistory } from "$lib/types/history";
	import Button from "./Button.svelte";

	export let history: tHistory;
	export let isSelected: () =>  boolean
	export let click: () => void
	let copy = () => {
		click()
		navigator.clipboard.writeText(history.shortenUrl)
	}
</script>

<div class="bg-white rounded-lg p-4 grid gap-4">
	<a href={history.url} class="text-Very_Dark_Violet text-ellipsis overflow-hidden whitespace-nowrap">{history.url}</a>
    <hr>
	<a href={history.shortenUrl} class="text-Cyan">{history.shortenUrl}</a>
	<Button content={`${isSelected()?"Copied!":"Copy"}`} class={`py-2 rounded-lg ${isSelected() ? "!bg-Dark_Violet !text-white" : ""}`} click={copy}/>


</div>
