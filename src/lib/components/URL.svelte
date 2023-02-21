<script lang="ts">
	import ShortenButton from "./ShortenButton.svelte";
    export let error:string
</script>
<form method="POST" action="/" class="p-6 rounded-xl grid bg-Dark_Violet md:p-10 md:bg-cover md:bg-[url('/images/bg-shorten-desktop.svg')] bg-[url('/images/bg-shorten-mobile.svg')] bg-no-repeat bg-contain bg-right-top gap-4">
    <input name="url" class={`p-2 rounded-md border-4 border-transparent outline-none w-full md:col-span-9 ${error? "!border-Red placeholder:text-Red placeholder:opacity-50 " : ""}`} type="text" placeholder="Shorten a link here..."/>
    {#if error}
        <p class="text-Red text-sm md:row-start-2">{error}</p>
    {/if}
    <ShortenButton class="md:col-start-10 md:row-start-1"/>
</form>