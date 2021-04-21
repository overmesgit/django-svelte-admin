<script lang="ts">
    import {DetailView} from "./DetailView";
    import Link from "./svelte-routing/Link.svelte";

    export let view: DetailView;
    export let obj: any;
</script>

<main>
    {#each view.model.attributeTypeMap as f}
        <p>{f.name}: {obj[f.name]}</p>
    {/each}
    <Link to="/{view.model.name}/{obj.id}/edit">Edit</Link>
</main>

<style>
</style>