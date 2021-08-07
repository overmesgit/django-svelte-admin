<script lang="ts">
    import {EditView} from "./EditView"
    import Enum from "./inputs/Enum.svelte"
    import DateInput from "./inputs/DateInput.svelte"
    import { navigate } from "./svelte-routing"

    export let view: EditView<any>
    export let successUrl: string
    let Model: any = view.model
    let my_obj: any = new Model()

    let defaultInputs = {
        'enum': Enum,
        'Date': DateInput
    }

    function create() {
        view.save(my_obj).then(
            navigate(successUrl)
        )
    }

</script>

<main>
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
    <button on:click|once={create}>Save</button>
</main>

<style>
</style>