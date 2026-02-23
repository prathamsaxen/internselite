import "./App.css";
import Name from "./Components/Name";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
// What are hooks?
// Hooks are functions that allow you to use state and other React features in functional components.

// what is useEffect?
// useEffect is a hook that allows you to perform side effects in functional components.
// useEffect is a hook that allows you to perform side effects in functional components.
// useEffect is a hook that allows you to perform side effects in functional components.
function App() {
  const name = "Pratham";
  const age = 20;
  const city = "New York";
  const country = "USA";
  const email = "pratham@gmail.com";
  const phone = "1234567890";
  const address = "123 Main St, New York, NY 10001";
  const zip = "10001";
  const state = "NY";

  const [names, setNames] = useState(0);
  const [names2, setNames2] = useState(0);
  const [nameList, setNameList] = useState(["Pratham", "John", "Jane", "Jim", "Jill"]);
  const [nameList2, setNameList2] = useState(["Pratham", "John", "Jane", "Jim", "Jill"]);

  const updateNames = () => {
    setNames(names + 1);
  };

  const updateNames2 = () => {
    setNames2(names2 + 1);
  };

  const getData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const finalResponse = await response.json();
      setNameList(finalResponse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Dependency Array - Then it will only run when the dependency array changes.

  return (
    <div className="app">
      {/* {nameList.map((name, index) => (
        <Name key={index} data={name.title} />
      ))}
      <p>{names}</p>
      <button onClick={updateNames}>Update Names</button>
      <button onClick={updateNames2}>Update Names2</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

//Assignment:
// 1. Create a new component called NameList.
// 2. Create a new state called nameList.
// 3. Create a new function called updateNameList.
// 4. Create a new button called Add Name.
// 5. Create a new input field called Name.
// 6. Create a new button called Add Name.
// 7. Create a new button called Remove Name.
// 8. Create a new button called Remove All Names.
// 9. Create a new button called Update Name.
// 10. Create a new button called Update All Names.
