<script>
    import {onDestroy} from 'svelte';

    let seconds = 0;
    const interval = setInterval(() => seconds += 1, 1000);

    onDestroy(() => clearInterval(interval));
</script>

<span>Loading</span><span style="position: absolute">{#each {length: seconds % 5} as i}.{/each}</span>

