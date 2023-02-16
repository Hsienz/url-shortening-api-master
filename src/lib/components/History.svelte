<script lang="ts">
	import type { tHistory } from "$lib/types/history";

	export let history: tHistory;
</script>

<div>
	<p>{history.url}</p>
    <hr>
	<p>{history.shortenUrl}</p>
</div>
