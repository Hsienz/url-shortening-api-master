<script lang="ts">
    export let content: string
    export let click : () => void = () => {}
</script>
<button class={`bg-Cyan text-white font-bold ${$$props.class} duration-300 hover:brightness-125`} on:click={click}>{content}</button>