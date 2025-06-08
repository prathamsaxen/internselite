import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
