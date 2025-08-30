import React, { useState } from "react";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

function App() {
  // const [number, setNumber] = useState(0);
  // const [data,setData]=useState("Pratham Saxena");
  //     Access Update

  // const changeFunction=()=>{
  //   setNumber(number+1);
  //   setData("SDE");
  // }
  const title="Pratham Saxena";
  return (
    <div className="container">
    <Header title={title}/>
    <Section title={"Jay Dixit"}/>
    <Footer title={"Riddhi Agarwal"}/>
    </div>
  );
}
// <div className="container">
      {/* <button onClick={()=>setNumber(number-1)}>Minus</button>
      <div>{number}{data}</div>
      <button onClick={changeFunction}>Plus</button> */}
    // </div>
export default App;

// 1. JSX Fragments
// 2. Ternary Operator
// 3. useEffect