import { useState } from "react";
import "./TodoForm.css"

const INITIAL_FORM_STATE = { todoText: "" };


export const TodoForm = ({addTodo}) => {
    const [form, setForm] = useState(INITIAL_FORM_STATE);
    const [error, setError] = useState(false);


    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!form.todoText || form.todoText?.trim() === "") {
            setError(true);
        }

        const newTodo = {
            text: form.todoText,
            completed: false,
            favorite: false,
            id: Date.now(),
            done: false,
        };

        console.log("formulario enviado", newTodo);
        addTodo(newTodo);
        setForm(INITIAL_FORM_STATE);
    };

    const onInputChange = ({ target: { name, value } }) => {
        setError(false);
        return setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <h2 className="form-title">Crear nueva tarea</h2>

            <div className="todo-form-container">
                <form className="todo-form" onSubmit={onFormSubmit}>
                    <input
                        type="text"
                        className={`todo-input ${error} ? "input-error" : ""`}
                        name="todoText"
                        placeholder="Introduce una tarea..."
                        value={form.todoText}
                        onChange={onInputChange} />

                    <button type="submit" className="add-btn">Añadir</button>

                </form>

                {error && <p className="error-message">Por favor, escribe una tarea.</p>}
            </div>
        </>
    );
};