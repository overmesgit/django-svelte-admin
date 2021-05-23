<script lang="ts">
    import {DetailView} from "./DetailView";
    import Link from "./svelte-routing/Link.svelte";
    import type {Base} from "./BaseView";

    export let view: DetailView;
    export let obj: Promise<Base>;

    let my_obj: Base = null;

    async function getObject() {
        my_obj = await obj;
    }

    getObject();
</script>

<main>
    {#if my_obj}
        {#each view.model.attributeTypeMap as f}
            <p>{f.name}: {my_obj[f.name]}</p>
        {/each}
        <Link to="/app/{view.model.name.toLowerCase()}/{my_obj.id}/edit">Edit</Link>
    {/if}
</main>

<style>
</style>