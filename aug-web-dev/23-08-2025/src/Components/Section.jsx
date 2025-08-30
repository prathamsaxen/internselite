import React, { useState, useEffect } from "react";
import "./Common.css";

function Section(props) {
  const [currentMode, setCurrentMode] = useState(false);

  useEffect(()=>{
    console.log("UseEffect called");
    // 1. Data call from backend
    // 2. If you wanted to implement any alteration using any dependency.
    // 3. Lifecycle Methods 
    //    1. Mount 
        // 2. Unmount
        // 3. Update
  },[currentMode])
  return (
    <div className="wrapper section">
      {currentMode ? <h1>Pratham Saxena</h1> : null}
      <button onClick={() => setCurrentMode(!currentMode)}>
        {currentMode ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Section;

// Condition ? In case of Condition True this code Snippet will run : In case of false this will execute
