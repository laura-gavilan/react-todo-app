import "./TodoList.css"

export const TodoList = (props) => {
    return (
        <div className="todo-list-container">
            <h2 className="todo-list-title"></h2>

            {!props?.todos.length && <p className="todo-list-empty">No hay tareas que mostrar</p>}

            {props.todos.map(todo => {
                return (
                    <div className="todo" key={todo.id}>
                        {todo.text}
                    </div>
                )
            })}
        </div>
    )
};