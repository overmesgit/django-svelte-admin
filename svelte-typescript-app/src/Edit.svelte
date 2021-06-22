<script lang="ts">
    import {EditView} from "./EditView";
    import type {Base} from "./BaseView";
    import Enum from "./inputs/Enum.svelte"
    import DateInput from "./inputs/DateInput.svelte";

    export let view: EditView<any>;
    export let obj: any;

    let my_obj: Base<any> = null;

    async function getObject() {
        my_obj = await obj;
    }

    getObject();

    let defaultInputs = {
        'enum': Enum,
        'Date': DateInput
    }
</script>

<main>
    {#if my_obj}
        {#each view.getFields() as f}
            <div class="field">
                <label class="label" for="">{f}</label>
                <div class="control">
                    {#if view.model.attributeTypeMap[f].type in defaultInputs}
                        <svelte:component this={defaultInputs[view.model.attributeTypeMap[f].type]}
                                          bind:value="{my_obj[f]}"
                                          fieldDescription="{view.model.attributeTypeMap[f]}"/>
                    {:else }
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