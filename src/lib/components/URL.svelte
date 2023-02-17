<script lang="ts">
	import ShortenButton from "./ShortenButton.svelte";
    export let error:string
</script>
<form method="POST" action="/" class="p-6 rounded-xl flex flex-col bg-Dark_Violet bg-[url('/images/bg-shorten-mobile.svg')] bg-no-repeat bg-contain bg-right-top gap-4">
    <input name="url" class={`p-2 rounded-md border-4 outline-none ${error? "border-Red placeholder:text-Red placeholder:opacity-50" : ""}`} type="text" placeholder="Shorten a link here..."/>
    {#if error}
        <p class="text-Red text-sm">{error}</p>
    {/if}
    <ShortenButton />
</form>