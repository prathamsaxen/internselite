import { useState, useEffect } from "react";
import "./App.css";
import NameCard from "./Components/NameCard";
function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("Light");
  const names = ["Pratham", "Jay", "Sujal", "Rohan"];
  // Access  Update
  // State is a kind of replacement of variables.

  const increament = () => {
    setCount(count + 1);
  };
  const decremeant = () => {
    setCount(count - 1);
  };
  const switchTheme = () => {
    if (theme == "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  };

  useEffect(()=>{
    alert("First Time Component Mounts!");
  },[]);

  return (
    <div className={`top-wrapper ${theme == "Dark" ? "dark-theme" : "light-theme"}`}>
      {/* <div className={`container ${theme == "Dark" ? "dark-theme" : "light-theme"}`}>
        <div className="wrapper">
          <button onClick={decremeant}>Minus</button>
          {count}
          <button onClick={increament}>Plus</button>
        </div>
        <button onClick={switchTheme}>
          {theme == "Dark" ? "Turn the Theme Light" : "Dark the theme"}
        </button>
      </div> */}
      <ul>
        {names.map((item, index) => {
          return  <NameCard key={index} name={item}/>;
        })}
      </ul>
    </div>
  );
}

export default App;

// COnditional Rendering - It will check the truth value and only renders the content which you want?
