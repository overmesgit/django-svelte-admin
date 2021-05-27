<script lang="ts">
    import {DetailView} from "./DetailView";
    import Link from "./svelte-routing/Link.svelte";
    import type {Base} from "./BaseView";

    export let view: DetailView<any>;
    export let obj: Promise<Base<any>>;

    let my_obj: Base<any> = null;

    async function getObject() {
        my_obj = await obj;
    }
    let widget = null;

    getObject();
</script>

<main>
    {#if my_obj}
        {#each view.getFields() as f}
            {#if widget=view.getFieldWidget(f)}
                <p>{f}: <svelte:component this={widget} value="{my_obj[f]}"/></p>
            {:else }
                <p>{f}: {my_obj[f]}</p>
            {/if}
        {/each}
        <Link to="/app/{view.model.name.toLowerCase()}/{my_obj.id}/edit">Edit</Link>
    {/if}
</main>

<style>
</style>