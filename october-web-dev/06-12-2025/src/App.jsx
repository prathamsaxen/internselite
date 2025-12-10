import { useEffect, useState } from "react";
import TodoForm from "./components/Todoform";
import TodoList from "./components/TodoList";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./services/todoAPI";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    loadTodos();

  }, []);

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAdd = async (todo) => {
    const newTodo = await addTodo(todo);
    setTodos([newTodo, ...todos]);
  };

  const handleToggle = async (todo) => {
    const updated = await updateTodo(todo._id, {
      completed: !todo.completed,
    });

    setTodos(
      todos.map((t) => (t._id === todo._id ? updated : t))
    );
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t._id !== id));
  };

  return (
    <div className="app">
      <h1>✅ Todo App</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}
