<script lang="ts">
    import type {AttributeTypeMap, BaseView} from "./BaseView";
    import Router from "./svelte-routing/Router.svelte";
    import Link from "./svelte-routing/Link.svelte";
    import Route from "./svelte-routing/Route.svelte";
    import {DetailView} from "./DetailView";
    import Detail from "./Detail.svelte";
    import Edit from "./Edit.svelte";


    export let view: BaseView;
    export let detail: DetailView;
    export let edit: Edit;
    let resp = view.getQuery(1);

    let results = [];
    let pageCount = 1;
    let currentPage = 1;

    function onResult(res) {
        results = res.results;
        pageCount = Math.ceil(res.count / view.pageSize);
    }

    resp.then(onResult)

    function changePage(page: number) {
        resp = view.getQuery(page);
        resp.then(onResult);
        currentPage = page;
    }

    let selectedObject: AttributeTypeMap = null;

    function getRouteObject(params) {
        let currentPageObject = results.filter((e) => String(e.id) === params.id);
        console.log(currentPageObject);
        if (currentPageObject.length > 0) {
            selectedObject = currentPageObject[0];
        } else {
            detail.getObject(params.id).then(res => {
                selectedObject = res;
            })
        }
    }
</script>

<main>

    <Router url="{view.model.name.toLowerCase()}" basepath="/app">
        <Route path="/">
            <table class="table is-fullwidth">
                <thead>
                <tr>
                    {#each view.model.attributeTypeMap as f}
                        <th>{f.name}</th>
                    {/each}
                </tr>
                </thead>
                <tbody>
                {#each results as u}
                    <tr>
                        {#each view.model.attributeTypeMap as f}
                            {#if f.name === 'name'}
                                <td>
                                    <Link to="/app/{view.model.name.toLowerCase()}/{u.id}">{u[f.name]}</Link>
                                </td>
                            {:else}
                                <td>{u[f.name]}</td>
                            {/if}

                        {/each}
                    </tr>
                {/each}
                </tbody>
            </table>
            <nav class="pagination" role="navigation" aria-label="pagination">
                <ul class="pagination-list">
                    {#each [...Array(pageCount).keys()] as i}
                        <li>
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <a class="pagination-link" class:is-current="{currentPage === i+1}"
                               on:click={changePage(i+1)}
                               aria-label="Page {i+1}" aria-current="page">{i + 1}</a>
                        </li>
                    {/each}
                </ul>
            </nav>
        </Route>
        <Route path="/:id" let:params>
            {getRouteObject(params)}
            {#if selectedObject}
                <Detail view="{detail}" obj="{selectedObject}"/>
            {/if}
        </Route>
        <Route path="/:id/edit" let:params>
            {getRouteObject(params)}
            {#if selectedObject}
                <Edit view="{edit}" obj="{selectedObject}"/>
            {/if}
        </Route>
    </Router>


</main>

<style>
</style>