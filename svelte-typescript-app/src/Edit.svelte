<script lang="ts">
    import {EditView} from "./EditView";
    import type {Base} from "./BaseView";
    import Enum from "./inputs/Enum.svelte"

    export let view: EditView<any>;
    export let obj: any;

    let my_obj: Base<any> = null;

    async function getObject() {
        my_obj = await obj;
    }

    getObject();

    let inputs = {
        'enum': Enum
    }

</script>

<main>
    {#if my_obj}
        {#each Object.keys(view.model.attributeTypeMap) as f}
            <div class="field">
                <label class="label" for="">{f}</label>
                <div class="control">
                    {#if view.model.attributeTypeMap[f].type === 'enum'}
                        <Enum value="{my_obj[f]}" enumValues="{Object.values(view.model.attributeTypeMap[f].enum)}"/>
                    {:else}
                        <input class="input" bind:value="{my_obj[f]}">
                    {/if}
                </div>
            </div>
        {/each}
        <button on:click|once={view.save(my_obj)}>Save</button>
    {/if}
</main>

<style>
</style>