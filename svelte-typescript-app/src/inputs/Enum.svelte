<script lang="ts">
    export let value: string = null
    export let fieldDescription: { baseName: string, type: string, format: string, enum?: any }
    let enumValues: { [k: string]: string } = Object.values(fieldDescription.enum)
    if (value == null) {
        value = enumValues[0];
    }
</script>

<div class="select">
    <select bind:value={value}>
        {#each enumValues as val}
            <option>{val}</option>
        {/each}
    </select>
</div>