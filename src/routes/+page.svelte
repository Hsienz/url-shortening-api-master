<script>
	import Footer from "$lib/components/Footer.svelte";
	import Function from "$lib/components/Function.svelte";
	import History from "$lib/components/History.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import Outro from "$lib/components/Outro.svelte";
	import Thumbnail from "$lib/components/Thumbnail.svelte";
	import URL from "$lib/components/URL.svelte";
	import Header from "../lib/components/Header.svelte";
</script>

<div class="text-Grayish_Violet flex flex-col p-8 font-medium text-lg">
	<div class="bg-white">
		<Header />
		<div class="-mx-8 overflow-hidden"><Thumbnail /></div>
		<Intro />
	</div>
	<URL />
	<History />
	<Function />
	<div class="-mx-8 -mb-8">
		<Outro />
		<Footer />
	</div>
</div>
