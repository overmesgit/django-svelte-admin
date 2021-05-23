<script lang="ts">
    import {
        Book, User
    } from "./client-ts";
    import {BaseView} from "./BaseView";
    import TableView from "./TableView.svelte";
    import Router from "./svelte-routing/Router.svelte";
    import Route from "./svelte-routing/Route.svelte";
    // import {DetailView} from "./DetailView";
    // import {EditView} from "./EditView";
    import MainMenu from "./MainMenu.svelte";


    class BookView extends BaseView<Book> {
        model = Book
        fields = [Book.Fields.id, Book.Fields.genre]
    }

    // class BookDetailView extends DetailView {
    //     model = Book;
    //
    //     getObject(id: number): Promise<Book> {
    //         return this.api.retrieveBook(id.toString());
    //     }
    //
    // }
    //
    // class BookEditView extends EditView<Book> {
    //     model = Book;
    //
    //     save(obj: Book): Promise<ObjectResponse<Book>> {
    //         return this.api.updateBook(obj.id.toString(), obj);
    //     }
    // }
    //
    // class BookCreateView extends EditView {
    //     model = Book;
    //
    //     save(obj: Book) {
    //         return this.api.createBook(obj);
    //     }
    // }
    //
    // class UserView extends BaseView {
    //     model = User;
    //
    //     getQuery() {
    //         return this.api.listUsers();
    //     }
    // }

    let tabs = [Book.name.toLowerCase(), User.name.toLowerCase()];

</script>

<main>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Django!
            </h1>
            <Router url="" basepath="/app/">
                <Route>
                    <MainMenu tabs="{tabs}"/>
                </Route>
                <Route path="{Book.name.toLowerCase()}/*">
                    <MainMenu tabs="{tabs}" url="{Book.name.toLowerCase()}"/>
                    <div class="box">
                         <TableView view="{new BookView()}"/>
<!--                        <TableView view="{new BookView()}" detail="{new BookDetailView()}"-->
<!--                                   edit="{new BookEditView()}" create="{new BookCreateView()}"/>-->
                    </div>
                </Route>
                <Route path="{User.name.toLowerCase()}/*">
                    <MainMenu tabs="{tabs}" url="{User.name.toLowerCase()}"/>
                    <div class="box">
<!--                        <TableView view="{new UserView()}"/>-->
                    </div>
                </Route>

            </Router>

        </div>
    </section>

</main>

<style>
</style>