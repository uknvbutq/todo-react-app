import "./App.css";

const App = () => {

    return (
        <main>
            <h1>todos app</h1>
            <h3>What needs to be done?</h3>
            <form>
                <input type="text" defaultValue="learn useContext" />
                <button>Add</button>
            </form>
            <section id="filters">
                <button>all tasks</button>
                <button>active tasks</button>
                <button>completed tasks</button>
            </section>
            <section id="todo-list">
                <div className="todo">
                    <input id="todo-0" type="checkbox"/>
                    <label htmlFor="todo-0">Learn useState</label>
                    <div className="actions">
                        <button>Edit</button>
                        <button>Remove</button>
                    </div>
                </div>
                <div className="todo">
                        <input id="todo-1" type="checkbox"/>
                        <label htmlFor="todo-1">Learn useEffect</label>
                        <div className="actions">
                            <button>Edit</button>
                            <button>Remove</button>
                        </div>
                    </div>
                <div className="todo">
                    <input id="todo-2" type="checkbox"/>
                    <label htmlFor="todo-2">Learn useReducer</label>
                    <div className="actions">
                        <button>Edit</button>
                        <button>Remove</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default App;