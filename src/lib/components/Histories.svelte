
<script lang="ts">
	import type { tHistory } from "$lib/types/history";
	import History from "./History.svelte";
    export let histories: tHistory[]
</script>

<div>
    {#each histories as history}
        <History {history} />
    {/each}
</div>
