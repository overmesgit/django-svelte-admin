<script lang="ts">
    import {EditView} from "./EditView";

    export let view: EditView;
    export let obj: any;

</script>

<main>
    {#each view.model.attributeTypeMap as f}
        <label>
            {f.name}
            <input bind:value="{obj[f.name]}">
        </label>
    {/each}
    <button on:click|once={view.save(obj)}>Save</button>
</main>

<style>
</style>