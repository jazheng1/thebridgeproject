import { TodoItem } from "../components/todoitem"

export default function TaskList({ todos, toggleTodo}) {
    return (
        <div className="container">
            <div>
                <h1>Whats up ___!</h1>
            </div>
            <div>
                <h3>Complete these for me homes</h3>
            </div>  
            <div className="tasks">
                <ul className="list">
                    <TodoItem />
                </ul>
            </div>
        </div>
    )
}