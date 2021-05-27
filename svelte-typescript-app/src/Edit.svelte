<script lang="ts">
    import {EditView} from "./EditView";
    import type {Base} from "./BaseView";

    export let view: EditView<any>;
    export let obj: any;

    let my_obj: Base<any> = null;

    async function getObject() {
        my_obj = await obj;
    }

    getObject();

</script>

<main>
    {#if my_obj}
        {#each Object.keys(view.model.attributeTypeMap) as f}
            <label>
                {f}
                <input bind:value="{my_obj[f]}">
            </label>
        {/each}
        <button on:click|once={view.save(my_obj)}>Save</button>
    {/if}
</main>

<style>
</style>