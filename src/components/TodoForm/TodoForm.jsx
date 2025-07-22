import { useState } from "react";
import "./TodoForm.css"

const INITIAL_FORM_STATE = { todoText: "" };


export const TodoForm = () => {
    const [form, setForm] = useState(INITIAL_FORM_STATE);

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!form.todoText) {
            console.log("Rellena el campo texto");
        }

        const newTodo = {
            text: form.todoText,
            completed: false,
            favorite: false,
            id: Date.now(),
            done: false,
        };

        console.log("formulario enviado", form);

        setForm(INITIAL_FORM_STATE);
    };

    const onInputChange = ({ target: { name, value } }) => {
        return setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <h2 className="form-title">Crear nueva tarea</h2>

            <div className="todo-form-container">
                <form className="todo-form" onSubmit={onFormSubmit}>
                    <input
                        type="text"
                        className="todo-input"
                        name="todoText"
                        placeholder="Introduce una tarea..."
                        value={form.todoText}
                        onChange={onInputChange} />

                    <button type="submit" className="add-btn">Añadir</button>
                </form>
            </div>
        </>
    );
};