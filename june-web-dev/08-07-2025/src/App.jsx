import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Designation from './Components/Designation'

function App() {
  const [count, setCount] = useState(0);
  const domain = "Full Stack Engineer";
  // 
// JSX
  return (
    <>
    <h1>Pratham Saxena</h1>
    <button onClick={()=>setCount(count+1)}>Plus</button>
    <p>{count}</p>
       <button onClick={()=>setCount(count-1)}>Minus</button>
    {/* <p>Software Engineer</p> */}
    <Designation domain={domain} data={"Pratham"}/>
    </>
  ) 
}

export default App
