<script lang="ts">
    import Button from "./Button.svelte";
    let toggled = false
</script>


<button class="aspect-square h-full flex flex-col justify-around" on:click={()=>{toggled=!toggled}}>
    <div class="w-full h-1 bg-Gray"></div>
    <div class="w-full h-1 bg-Gray"></div>
    <div class="w-full h-1 bg-Gray"></div>
</button>


<div class={`${toggled ? "opacity-100" : "opacity-0"} duration-300 flex absolute text-white font-bold top-[200%] z-10 bg-Dark_Violet flex-col w-full left-0 rounded-2xl py-9 px-8 gap-6`}>
    <button>Features</button>
    <button>Pricing</button>
    <button>Resources</button>
    <hr class="border-Gray opacity-30">
    <button>Login</button>
    <Button class="bg-Cyan rounded-full py-2" content="Sign Up"></Button>
</div>