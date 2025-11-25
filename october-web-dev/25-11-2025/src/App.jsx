import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataContext from "./Context/DataContext";
import TestComponent from "./Components/TestComponent";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [users, setUsers] = useState([]);
  // useEffect
  useEffect(() => {
    console.log("UseEffect Called");
    fetchData();
  }, [count2]);

  const fetchData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await data.json();
      console.log(response);
      setUsers(response);
    } catch (err) {
      console.log(err);
    }
  };
  // Blank Dependecny Array - Then it will only run when

  return (
    // <>
    //   <DataContext.Provider value={{ name: "Pratham Saxena | Context API Lecture Youtube" }}>
    //     <div>
    //       <a href="https://vite.dev" target="_blank">
    //         <img src={viteLogo} className="logo" alt="Vite logo" />
    //       </a>
    //       <a href="https://react.dev" target="_blank">
    //         <img src={reactLogo} className="logo react" alt="React logo" />
    //       </a>
    //     </div>
    //     <TestComponent/>
    //     <h1>Vite + React</h1>
    //     <div className="card">
    //       {/* <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <button onClick={() => setCount2((count2) => count2 + 1)}>
    //       count is {count2}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p> */}
    //       <div>
    //         {users.map((item, index) => {
    //           return <h2 key={item.id}>{item.name}</h2>;
    //         })}
    //       </div>
    //     </div>
    //     <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    //   </DataContext.Provider>
    // </>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
