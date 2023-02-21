<script lang="ts">
	import type { tCard } from "../types/card";
	export let props: tCard;
</script>

<div class="bg-white rounded-md px-6 pb-16 xl:w-96">
	<div
		class="bg-Dark_Violet flex justify-center items-center h-20 mx-auto aspect-square rounded-full -translate-y-1/2"
	>
		<img src={props.icon} alt="" />
	</div>
	<div class="-mt-4 grid gap-4">
		<h3 class="text-Very_Dark_Violet text-xl font-bold">{props.title}</h3>
		<p>{props.description}</p>
	</div>
</div>
