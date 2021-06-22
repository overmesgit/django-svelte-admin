<script lang="ts">
    export let value: Date = null;
</script>

<input on:change={(event) => {value = new Date(event.target.value)}} class="input"
       value="{value.toISOString().split('T')[0]}" type="date">
