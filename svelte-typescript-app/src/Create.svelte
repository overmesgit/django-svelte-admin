<script lang="ts">
    import {EditView} from "./EditView";
    import type {Base} from "./BaseView";
    import {AbstractModel} from "./BaseView";
    import {ApiException} from "./client-ts/apis/exception";

    export let view: EditView;

    let my_obj: Base = new AbstractModel();

    async function create() {
        try{
            let resp = await view.save(my_obj);
            console.log(resp);
        } catch (e) {
            //
            console.log(e);
            console.log(e.result);
        }
    }

</script>

<main>
    {#each view.model.attributeTypeMap as f}
        {#if f.name !== 'id'}
            <label>
                {f.name}
                <input bind:value="{my_obj[f.name]}">
            </label>
        {/if}
    {/each}
    <button on:click|once={create}>Create</button>
</main>

<style>
</style>