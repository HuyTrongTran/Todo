import html from "../core.js";
import { connect } from "../store.js";
import Header from "../component/header.js";
import Main  from "../component/TodoList.js";
import Footer  from "../component/footer.js";

function App({ todos }){
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 &&  Main()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connect()(App)