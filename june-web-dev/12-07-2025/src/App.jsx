import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTask([...task, inputValue]);
      setInputValue("");
    }
  };
  const deleteTask = (id) => {
    setTask((data) => {
      return data.filter((item, index) => index !== id);
    });
  };

  const [elements,setElements]=useState([]);

  const fetchData = async () => {
    try {
      const status = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await status.json();
      console.log(data);
      setElements(data);
    } catch (err) {
      console.log(err);
      setElements([{title:"Pratham Saxena"},{title:"Apple"},{title:"Banana"}])
    }
  };

  useEffect(() => {
    fetchData();
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
        return <Task task={data} key={index} index={index} deleteTask={deleteTask} />;
      })}
      {
        elements.map((data,index)=>{
          return <div key={index}>{data.title}</div>
        })
      }
    </div>
  );
}

export default App;
