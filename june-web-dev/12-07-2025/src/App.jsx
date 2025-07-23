import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddTask = async () => {
    if (inputValue.trim()) {
      try {
        const status = await fetch("http://localhost:4000/api/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: inputValue }),
        });
        await getTasks();
        setInputValue("");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const deleteTask =async (id) => {
    try{
      const status = await fetch(`http://localhost:4000/api/todos/${id}`,{method:"DELETE"});
      await getTasks();
    }
    catch(err)
    {
      console.log(err);
    }
  };

  const getTasks = async () => {
    try {
      const status = await fetch("http://localhost:4000/api/todos");
      const response = await status.json();
      setTask(response);
    } catch (err) {
      console.log(err);
    }
  };

  const [elements, setElements] = useState([]);

  const fetchData = async () => {
    try {
      const status = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await status.json();
      console.log(data);
      setElements(data);
    } catch (err) {
      console.log(err);
      setElements([{ title: "Pratham Saxena" }, { title: "Apple" }, { title: "Banana" }]);
    }
  };

  useEffect(() => {
    // fetchData();
    getTasks();
  }, []);
  return (
    <div className="container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your Task..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      {task.map((data, index) => {
        return <Task task={data.name} key={data._id} index={data._id} deleteTask={deleteTask} />;
      })}
      {/* {
        elements.map((data,index)=>{
          return <div key={index}>{data.title}</div>
        })
      } */}
    </div>
  );
}

export default App;
