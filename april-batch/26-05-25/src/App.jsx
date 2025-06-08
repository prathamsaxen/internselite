// import { useEffect, useState } from "react";
// import "./App.css";


// import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
// import Home from "./Pages/Home";
// import Navigation from "./Pages/Navigation";
 
// function App() {
  
//   // Getter   Setter        Initial

//   // useEffect(()=>{
//   //   console.log("Component Did Mount");
//   // },[])

//   //   useEffect(()=>{
//   //   console.log("Component Did Update");
//   // },[number])

//   // // Component Did Unmount.
//   // //const MyComponent = () => {
//   // useEffect(() => {
//   //   // Mounting logic here
//   //   console.log('Component mounted');

//   //   return () => {
//   //     // Unmounting logic here (componentWillUnmount)
//   //     console.log('Component unmounted');
//   //   };
//   // }, []); 

//   // What is react hooks?
//   // It is a kind of prewritten code function which can be only accessible isnide functional components.



  
//   return (
//     <>
//     {/* */}
//       <Router>
//       <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/navigate" element={<Navigation/>}/>
//       </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

// // Conditional Rendering ??? Only render element on screen whenever it is required.
// // Condition ? True : False
// // Component UseCase 
// // 1 Code usuability 
// // 2 Code Readability
// // 3 Code Reuse
// // 4 Better code structure
// // Component Lifecycles

import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  // It will store your all task
  const [input, setInput] = useState('');
  // It will handle the input of any input text box
  const [editId, setEditId] = useState(null);
  // Edit id will be the id of that element which we are going to modify

  const handleAddOrUpdate = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      setTasks(tasks.map((task, index) =>
        index === editId ? input.trim() : task
      ));
      setEditId(null);
    } else {
      setTasks([...tasks, input.trim()]);
    }
    setInput('');
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditId(index);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    if (editId === index) {
      setInput('');
      setEditId(null);
    }
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleAddOrUpdate}>
          {editId !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <div className="actions">
              <button className="edit" onClick={() => handleEdit(index)}>✏️</button>
              <button className="delete" onClick={() => handleDelete(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
