<script lang="ts">
    import {EditView} from "./EditView";
    import type {Base} from "./BaseView";

    export let view: EditView;
    export let obj: any;

    let my_obj: Base = null;

    async function getObject() {
        my_obj = await obj;
    }

    getObject();

</script>

<main>
    {#if my_obj}
        {#each view.model.attributeTypeMap as f}
            <label>
                {f.name}
                <input bind:value="{my_obj[f.name]}">
            </label>
        {/each}
        <button on:click|once={view.save(my_obj)}>Save</button>
    {/if}
</main>

<style>
</style>