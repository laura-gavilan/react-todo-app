import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.css"

export const TodoList = (props) => {
    return (
        <div className="todo-list-container">
            <h2 className="todo-list-title"></h2>

            {!props?.todos.length && <p className="todo-list-empty">No hay tareas que mostrar</p>}

            {props.todos.map(todo => {
                return (
                    <TodoItem  
                    key={todo.id} 
                    toggleTodo={props.toggleTodo} 
                    todo={todo} />
                )
            })}
        </div>
    )
};