import React, { useState } from "react";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  // const [number, setNumber] = useState(0);
  // const [data,setData]=useState("Pratham Saxena");
  //     Access Update

  // const changeFunction=()=>{
  //   setNumber(number+1);
  //   setData("SDE");
  // }
  const title = "Pratham Saxena";
  return (
    <div className="container">
      <Header title={title} />
      {/* <Section title={"Jay Dixit"}/> */}
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      }
      <Footer title={"Riddhi Agarwal"} />
    </div>
  );
}
// <div className="container">
{
  /* <button onClick={()=>setNumber(number-1)}>Minus</button>
      <div>{number}{data}</div>
      <button onClick={changeFunction}>Plus</button> */
}
// </div>
export default App;

// 1. JSX Fragments
// 2. Ternary Operator
// 3. useEffect

// To Implement Routing
// 1. Install react-router-dom
