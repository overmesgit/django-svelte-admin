<script lang="ts">
    import {EditView} from "./EditView"
    import Enum from "./inputs/Enum.svelte"
    import DateInput from "./inputs/DateInput.svelte"

    export let view: EditView<any>
    export let onEdit: () => void
    let Model: any = view.model
    let my_obj: any = new Model()
    let errors: { [name: string]: Array<string> } = {}

    let defaultInputs = {
        'enum': Enum,
        'Date': DateInput
    }

    function create() {
        view.save(my_obj).then(
            onEdit,
            (reason) => {
                reason.json().then(
                    (data) => {
                        errors = data
                    }
                )
            }
        )
    }
</script>

<main>
    {#each Object.entries(view.getFieldsSchema()) as [f, schema]}
        <div class="field">
            <label class="label is-capitalized" for="">{f}{#if schema.required}<span class="has-text-danger">*</span>{/if}</label>
            <div class="control">
                {#if schema.type in defaultInputs}
                    <svelte:component this={defaultInputs[schema.type]}
                                      bind:value="{my_obj[f]}"
                                      fieldDescription="{schema}"/>
                {:else }
                    <input class="input" bind:value="{my_obj[f]}">
                {/if}
                {#if f in errors}
                    <div class="notification is-danger is-light p-1">
                        <ul>
                            {#each errors[f] as error}
                                <li>{error}</li>
                            {/each}
                        </ul>

                    </div>
                {/if}
            </div>
        </div>
    {/each}
    <button on:click|once={create}>Save</button>
</main>

<style>
</style>