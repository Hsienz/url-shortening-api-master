<script lang="ts">
    import type {tCard} from '../types/card'
    export let props:tCard
</script>
<div>
    <img src={props.icon} alt="">
    <h3>{props.title}</h3>
    <p>{props.description}</p>
</div>


