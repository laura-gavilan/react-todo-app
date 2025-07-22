import "./TodoItem.css"

//Completarla
//Eliminarla
//Favorito


export const TodoItem = ({todo, toggleTodo})=> {
    return (
        <div className={`todo-item ${todo.done ? "done" : ""}`} onClick={() => toggleTodo(todo.id)}>
            <span className="todo-text">{todo.text}</span>

            <div className="todo-actions"></div>
        </div>

    )
}