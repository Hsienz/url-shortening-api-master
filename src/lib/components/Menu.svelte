<script lang="ts">
	import Button from "./Button.svelte";
	let toggled = false;
</script>

<button
	class="aspect-square h-full flex flex-col justify-around lg:hidden"
	on:click={() => {
		toggled = !toggled;
	}}
>
	<div class="w-full h-1 bg-Gray" />
	<div class="w-full h-1 bg-Gray" />
	<div class="w-full h-1 bg-Gray" />
</button>

<div
	class={`${
		toggled ? "opacity-100" : "hidden opacity-0"
	} lg:basis-full lg:justify-between lg:flex lg:opacity-100 lg:p-0 lg:w-auto lg:relative lg:flex-row lg:inset-0 lg:bg-transparent lg:text-Gray duration-300 flex absolute text-white font-bold top-[200%] z-10 bg-Dark_Violet flex-col w-full left-0 rounded-2xl py-9 px-8 gap-6`}
>
	<div class="flex flex-col lg:flex-row gap-[inherit]">
		<button class="hover:text-Very_Dark_Blue duration-300">Features</button>
		<button class="hover:text-Very_Dark_Blue duration-300">Pricing</button>
		<button class="hover:text-Very_Dark_Blue duration-300">Resources</button>
	</div>
	<hr class="border-Gray opacity-30 lg:hidden" />
	<div class="flex flex-col lg:flex-row gap-[inherit]">
		<button class="hover:text-Very_Dark_Blue duration-300">Login</button>
		<Button class="bg-Cyan rounded-full py-2 md:px-6" content="Sign Up" />
	</div>
</div>
