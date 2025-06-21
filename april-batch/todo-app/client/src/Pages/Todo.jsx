import React, { useEffect, useState } from "react";
import "../App.css";

function Todo({ user, setUser }) {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // GET: Fetch existing tasks
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/todos/", {
        headers: {
          Authorization: `Bearer ${user?.token}`, // <-- ADD THIS
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch tasks");
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error("Fetch Error:", err.message);
      alert(err.message);
    }
  };

  console.log(user.token);

  // POST: Add new task
  const addTask = async () => {
    if (task.trim() === "") return;

    try {
      const response = await fetch("http://localhost:3000/api/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ name: task }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to add task");
      }

      fetchTasks();
      setTask("");
    } catch (err) {
      console.error("Add Task Error:", err.message);
      alert(err.message);
    }
  };

  const handleDelete = async (index) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/${index}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user?.token}`, // <-- ADD THIS
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to Delete tasks");
      fetchTasks();
    } catch (err) {
      console.error("Fetch Error:", err.message);
      alert(err.message);
    }
  };

  const handleLogout=()=>{
    setUser(null);
    
  }

  return (
    <div className="app">
     <div className="header">
        <h1>Todo App</h1>
        <button onClick={handleLogout} style={{ marginLeft: "auto" }}>
          Logout
        </button>
      </div>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li key={todo._id}>
            {todo.name}
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
