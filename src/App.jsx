import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";


export const App = () => {
    const [activeTab, setActiveTab] = useState(Tabs.TODOS);
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos(prev => [...prev, newTodo]);
    }

    return (
        <div className="app-container">
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <h1 className="app-title">Mi lista de tareas</h1>

            {activeTab === Tabs.TODOS && <TodoList/>}

            {activeTab === Tabs.FAVORITES && <h2>Pestaña: Favoritos</h2>}

            {activeTab === Tabs.NEW_TODO && <TodoForm addTodo={addTodo}/>}
        </div>
    );
};
