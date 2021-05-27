<script lang="ts">
    import type {Base, BaseView} from "./BaseView";
    import Router from "./svelte-routing/Router.svelte";
    import Link from "./svelte-routing/Link.svelte";
    import Route from "./svelte-routing/Route.svelte";
    import {DetailView} from "./DetailView";
    import Detail from "./Detail.svelte";
    import Edit from "./Edit.svelte";
    import Create from "./Create.svelte";
    import {EditView} from "./EditView";


    export let view: BaseView<any>;
    export let detail: DetailView<any>;
    export let edit: EditView<any>;
    export let create: EditView<any>;

    let results = [];
    let pageCount = 1;
    let currentPage = 1;

    function changePage(page: number) {
        let resp = view.getQueryInternal(page);
        resp.then(res => {
            results = res.results;
            pageCount = view.pagesCount;
        });
        currentPage = page;
    }

    changePage(1)

    async function getRouteObject(params): Promise<Base<any>> {
        let currentPageObject = results.filter((e) => String(e.id) === params.id);
        if (currentPageObject.length > 0) {
            return new Promise((resolve, reject) => {
                resolve(currentPageObject[0]);
            });
        } else {
            return detail.getObject(params.id)
        }
    }
    let widget = null
</script>

<main>

    <Router url="{view.model.name.toLowerCase()}" basepath="/app">
        <Route path="/">
            <table class="table is-fullwidth">
                <thead>
                <tr>
                    {#each view.getFields() as f}
                        <th>{f}</th>
                    {/each}
                </tr>
                </thead>
                <tbody>
                {#each results as obj}
                    <tr>
                        {#each view.getFields() as f}
                            {#if f === 'name'}
                                <td>
                                    <Link to="/app/{view.model.name.toLowerCase()}/{obj.id}">{obj[f]}</Link>
                                </td>
                            {:else}
                                {#if widget = view.getFieldWidget(f)}
                                    <td><svelte:component this={widget} value="{obj[f]}"/></td>
                                {:else }
                                    <td>{obj[f]}</td>
                                {/if}
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
         <Route path="/add">
            <Create view="{create}" />
        </Route>
    </Router>


</main>

<style>
</style>