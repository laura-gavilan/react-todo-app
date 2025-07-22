import "./TodoItem.css"

//Completarla
//Eliminarla
//Favorito


export const TodoItem = ({ todo, onToggleTodo, onDeleteTodo, onToggleFavorite }) => {
    return (
        <div
            className={`todo-item ${todo.done ? "done" : ""}`}
            onClick={() => onToggleTodo(todo.id)}>

            <span className="todo-text">{todo.text}</span>

            <div className="todo-actions">
                <button
                    className={`favorite-btn ${todo.favorite ? "active" : ""}`}
                    onClick={(event) => {
                        event.stopPropagation();
                        onToggleFavorite(todo.id)
                    }} >

                    {todo.favorite ? "⭐" : "⭐"}
                </button>

                <button
                    className="delete-btn"
                    title="Eliminar"
                    onClick={(event) => {
                        event.stopPropagation();
                        onDeleteTodo(todo.id)
                    }}>
                </button>
            </div>
        </div>
    );
};