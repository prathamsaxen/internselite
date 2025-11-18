import { useState } from "react";
import "./App.css";
import NameCard from "./Components/NameCard";

function App() {
  const [count, setCount] = useState(0);
  const [isMale,setIsMale]=useState(true);
  const increament = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      {/* <button onClick={decrement}>Minus</button>
      <p>{count}</p>
      <button onClick={increament}>Plus</button> */}
      <NameCard name="Pratham Saxena"/>
      <NameCard name="Pihu Mahajan"/>
      <NameCard name="Vishakha Sahu"/>

      <button onClick={()=>setIsMale(!isMale)}>Gender</button>

      {isMale?<h1>Hello Sir,</h1>:<h1>Hello Mam</h1>}


    </div>
  );
}

export default App;
