<script lang="ts">
    export let value: string = null;
    export let enumValues: { [k: string]: string };

</script>

<div class="select">
    <select bind:value={value}>
        {#each enumValues as val}
            <option>{val}</option>
        {/each}
    </select>
</div>