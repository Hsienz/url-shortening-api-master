<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Function from "$lib/components/Function.svelte";
	import Histories from "$lib/components/Histories.svelte";
	import Intro from "$lib/components/Intro.svelte";
	import Outro from "$lib/components/Outro.svelte";
	import Thumbnail from "$lib/components/Thumbnail.svelte";
	import URL from "$lib/components/URL.svelte";
	import Header from "../lib/components/Header.svelte";
	import type { ActionData, PageServerData } from "./$types";
	export let data: PageServerData;
	export let form: ActionData;
</script>

<div class="text-Grayish_Violet flex flex-col pt-8 font-medium text-lg overflow-hidden">
	<div class="bg-white px-4 pb-36 grid gap-8 md:px-24">
		<Header />
		<div class="flex flex-col lg:flex-row-reverse md:gap-16">
			<div class="-mx-4 md:-mr-24 ml-auto w-[90vw] lg:w-[40vw] lg:h-[30vw] h-[80vw]"><Thumbnail /></div>
			<Intro />
		</div>
	</div>
	<div
		class="md:px-24 flex flex-col gap-16 before:bg-Dark_Violet before:content-[''] before:absolute before:w-full before:top-0 before:left-0 before:h-full before:-z-10 before:opacity-10 px-4 relative pt-36 pb-24"
	>
		<div class="absolute top-0 -translate-y-1/2 w-full left-0 px-[inherit]">
			<URL
				error={form?.error_code == 1
					? "Please add a link"
					: form?.error}
			/>
		</div>
		<Histories histories={data.histories} />
		<Function />
	</div>
	<div>
		<Outro />
		<Footer />
	</div>
</div>
