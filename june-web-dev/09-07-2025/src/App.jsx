import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import A from "./Components/A";
import NameContext from "./Context/NameContext";
import { Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  const name = "Pratham";
  const [status, setStatus] = useState(true);
  const [status2, setStatus2] = useState(true);

  useEffect(() => {
    console.log("UseEffect Run");
  });
  return (
    <div>
      <NameContext.Provider value={{ name }}>
        <A />
        <button onClick={() => setStatus(!status)} className={status ? `bg-blue` : ""}>
          Change Status
        </button>
        <button onClick={() => setStatus2(!status2)} className={status2 ? `bg-blue` : ""}>
          Change Status2
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </NameContext.Provider>
    </div>
  );
  // return <>{status === true ? <h1>Status Is True</h1> : <h1>Status is false</h1>}
  // <button onClick={()=>setStatus(!status)} className={status?`bg-blue`:''}>Change Status</button>
  // </>;
}

export default App;
