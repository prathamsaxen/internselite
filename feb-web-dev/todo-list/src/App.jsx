import "./App.css";
import { useState, useEffect } from "react";
import Spinner from "./Components/Spinner";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const getTodosFromServer = async (filter) => {
    try {
      if (filter) {
        const response = await fetch(`http://localhost:3000/api/todos/get?complete=${filter}`);
        const data = await response.json();
        setTodos(
          data.map((todo) => ({
            id: todo._id,
            title: todo.title,
            completed: todo.completed,
            description: todo.description,
          })),
        );
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodosFromServer(filter);
  }, []);

  useEffect(() => {
    getTodosFromServer(filter);
  }, [filter]);

  const addTask = async () => {
    if (inputValue.trim() === "") {
      setInputValue("Input is empty");
      setError("Input is empty");
      setTimeout(() => {
        setInputValue("");
        setError("");
      }, 3000);
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/todos/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: inputValue.trim(), description: inputValue.trim() }),
      });
   await response.json();
     
    } catch (error) {
      console.error("Error adding task:", error);
    }
    getTodosFromServer(filter);
    setInputValue("");
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/delete/${id}`, {
        method: "DELETE",
      });
     await response.json();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
    getTodosFromServer(filter);
  };

  const changeStatus = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/change-status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !todos.find((todo) => todo.id === id).completed }),
      });
      await response.json();
    
    } catch (error) {
      console.error("Error changing status:", error);
    }
    getTodosFromServer(filter);
  };
  return loading ? (
    <Spinner />
  ) : (
    <div className="todo-app">
      <header className="todo-header">
        <h1 className="todo-title">Todo</h1>
        <p className="todo-subtitle">Keep it simple</p>
      </header>

      <section className="todo-input-section">
        <input
          type="text"
          className={`todo-input ${error ? "todo-input-error" : ""}`}
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          className="todo-add-btn"
          aria-label="Add"
          onClick={addTask}
          disabled={error ? true : false}
        >
          Add
        </button>
      </section>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className={`todo-item ${todo.completed ? "todo-item-done" : ""}`} key={todo.id}>
            {todo.completed ? (
              <span className="todo-check" onClick={() => changeStatus(todo.id)}>
                ✓
              </span>
            ) : (
              <span className="todo-check" onClick={() => changeStatus(todo.id)}>
                ○
              </span>
            )}
            <span className="todo-text">{todo.title}</span>
            <span className="todo-delete-btn" onClick={() => deleteTodo(todo.id)}>
              x
            </span>
          </li>
        ))}
      </ul>

      <footer className="todo-footer">
        <span className="todo-count">{todos.length} items left</span>
        <div className="todo-filters">
          <button
            type="button"
            className={`todo-filter ${filter === "all" ? "todo-filter-active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={`todo-filter ${filter === "active" ? "todo-filter-active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            type="button"
            className={`todo-filter ${filter === "done" ? "todo-filter-active" : ""}`}
            onClick={() => setFilter("done")}
          >
            Done
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
