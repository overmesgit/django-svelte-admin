<script lang="ts">
    import {
        Book, User
    } from "./client-ts";
    import {BaseView, Fields} from "./BaseView";
    import TableView from "./TableView.svelte";
    import Router from "./svelte-routing/Router.svelte";
    import Route from "./svelte-routing/Route.svelte";
    import {DetailView} from "./DetailView";
    import MainMenu from "./MainMenu.svelte";
    import DateWidget from "./widgets/DateWidget.svelte"
    import {EditView} from "./EditView";

    class BookView extends BaseView<Book> {
        model = Book
        fields = Fields.All
        widgets = {
            [Book.Fields.releaseDate]: DateWidget,
        }
    }

    class BookDetailView extends DetailView<Book> {
        model = Book;
        fields = [Book.Fields.id, Book.Fields.genre, Book.Fields.releaseDate]
        widgets = {
            [Book.Fields.releaseDate]: DateWidget,
        }
    }

    class BookEditView extends EditView<Book> {
        model = Book;
        fields = [Book.Fields.name, Book.Fields.genre, Book.Fields.releaseDate]
    }

    class BookCreateView extends EditView<Book> {
        model = Book
        fields = [Book.Fields.name, Book.Fields.genre, Book.Fields.releaseDate, Book.Fields.author]
    }

    class UserView extends BaseView<User> {
        model = User;
        fields = [User.Fields.id, User.Fields.email]
    }

    let tabs = [Book.name.toLowerCase(), User.name.toLowerCase()];

</script>

<main>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Django!!!
            </h1>
            <Router url="" basepath="/app/">
                <Route>
                    <MainMenu tabs="{tabs}"/>
                </Route>
                <Route path="{Book.name.toLowerCase()}/*">
                    <MainMenu tabs="{tabs}" url="{Book.name.toLowerCase()}"/>
                    <div class="box">
                        <TableView view="{new BookView()}" detail="{new BookDetailView()}"
                                   edit="{new BookEditView()}" create="{new BookCreateView()}"/>
                    </div>
                </Route>
                <Route path="{User.name.toLowerCase()}/*">
                    <MainMenu tabs="{tabs}" url="{User.name.toLowerCase()}"/>
                    <div class="box">
                        <TableView view="{new UserView()}"/>
                    </div>
                </Route>

            </Router>

        </div>
    </section>

</main>

<style>
</style>