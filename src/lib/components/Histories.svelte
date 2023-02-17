
<script lang="ts">
	import type { tHistory } from "$lib/types/history";
	import History from "./History.svelte";
    export let histories: tHistory[]
    let select = -1
    $: console.log(select)
</script>

<div class="flex flex-col gap-6">
    {#each histories as history, i}
        <History {history} isSelected={()=>select==i} click={()=>{select=i}} />

    {/each}
</div>
