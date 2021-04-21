<script lang="ts">
    import {BaseView} from "./BaseView";
    import Loading from "./Loading.svelte";

    export let view: BaseView;
    let resp = view.getQueryInternal(1);

    let results = [];
    results = (await resp).results;

    function changePage(page: number) {
        resp = view.getQueryInternal(page);
    }



</script>

<main>
    {#await resp}
        <table class="table is-fullwidth">
            <colgroup>
                <col style="width: 20em"/>
            </colgroup>
            <thead>
            <tr>
                {#each view.model.attributeTypeMap as f}
                    <th>{f.name}</th>
                {/each}
            </tr>
            </thead>
            <tbody>
            {#each [...Array(10).keys()] as i}
            <tr>
                <td>
                    <Loading></Loading>
                </td>
            </tr>
            {/each}
            </tbody>
        </table>
    {:then resp}
        <table class="table is-fullwidth">
            <thead>
            <tr>
                {#each view.model.attributeTypeMap as f}
                    <th>{f.name}</th>
                {/each}
            </tr>
            </thead>
            <tbody>
            {#each resp.results as u}
                <tr>
                    {#each view.model.attributeTypeMap as f}
                        <td>{u[f.name]}</td>
                    {/each}
                </tr>
            {/each}
            </tbody>
        </table>
        <nav class="pagination" role="navigation" aria-label="pagination">
            <ul class="pagination-list">
                {#each [...Array(view.pagesCount).keys()] as i}
                    <li>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <a class="pagination-link" class:is-current="{view.currentPage === i+1}"
                           on:click={changePage(i+1)}
                           aria-label="Page {i+1}" aria-current="page">{i+1}</a>
                    </li>
                {/each}
            </ul>
        </nav>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

</main>

<style>
</style>