<script lang="ts">
    import Link from "./svelte-routing/Link.svelte";

    export let url: string;
    export let tabs: string;
</script>

<main>
    <div class="tabs">
        <ul>
            {#each tabs as tab}
                <li class:is-active="{url === tab}">
                    <Link to="{tab}">{tab}</Link>
                </li>
            {/each}
        </ul>
    </div>
</main>

<style>
</style>