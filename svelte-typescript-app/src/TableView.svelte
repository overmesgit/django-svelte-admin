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

    async function getRouteObject(params): Promise<AttributeTypeMap> {
        let currentPageObject = results.filter((e) => String(e.id) === params.id);
        if (currentPageObject.length > 0) {
            return new Promise((resolve, reject) => {
                resolve(currentPageObject[0]);
            });
        } else {
            return detail.getObject(params.id)
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
            <Detail view="{detail}" obj="{getRouteObject(params)}"/>
        </Route>
        <Route path="/:id/edit" let:params>
            <Edit view="{edit}" obj="{getRouteObject(params)}"/>
        </Route>
    </Router>


</main>

<style>
</style>