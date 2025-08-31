import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListItem from "./Components/ListItem";

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTask([...task, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    setTask((oldData) => oldData.filter((item, position) => index !== position));
  };

  return (
    <>
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
            <ListItem data={item} key={index} index={index} deleteFunction={deleteTask} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
