<script>
	import ShortenButton from "./ShortenButton.svelte";

</script>
<form method="POST" action="/" class="p-6 rounded-xl flex flex-col bg-Dark_Violet bg-[url('/images/bg-shorten-mobile.svg')] bg-no-repeat bg-contain bg-right-top gap-4">
    <input name="url" class="p-2 rounded-md" type="text" placeholder="Shorten a link here..."/>
    <ShortenButton />
</form>