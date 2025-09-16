import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListItem from "./Components/ListItem";
import Login from "./Components/Login";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(null);
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      getData();
    }
  }, [isAuthenticated]);

  const getData = async () => {
    try {
      console.log(isAuthenticated);
      const status = await fetch(`http://127.0.0.1:8000/todo/${isAuthenticated}`);
      const data = await status.json();
      setTask(data);
    } catch (err) {
      console.log(err);
    }
  };
  const addTask = async () => {
    try {
      if (inputValue.trim() !== "") {
        const status = await fetch("http://127.0.0.1:8000/todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: inputValue, userId: isAuthenticated }),
        });
        getData();
        setInputValue("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (index) => {
    try {
      await fetch(`http://127.0.0.1:8000/todo/${index}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: isAuthenticated }),
      });
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="container">
          <h1>Todo App</h1>
          <div className="header">
            <input
              type="text"
              placeholder="Enter Todo..."
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>
          <div className="task-list">
            {/* <ListItem data={"Pratham Saxena"}/> */}
            {task.map((item, index) => (
              <ListItem
                data={item.task}
                key={item._id}
                index={item._id}
                deleteFunction={deleteTask}
              />
            ))}
          </div>
        </div>
      ) : (
        <Login setAuthenticated={setAuthenticated} />
      )}
    </>
  );
}

export default App;
