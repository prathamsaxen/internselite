// // // import { useState } from 'react'
// // // import heroImg from './assets/hero.png'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from './assets/vite.svg'
// // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <section id="center">
// // //         <div className="hero">
// // //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// // //           <img src={reactLogo} className="framework" alt="React logo" />
// // //           <img src={viteLogo} className="vite" alt="Vite logo" />
// // //         </div>
// // //         <div>
// // //           <h1>Get started</h1>
// // //           <p>
// // //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// // //           </p>
// // //         </div>
// // //         <button
// // //           type="button"
// // //           className="counter"
// // //           onClick={() => setCount((count) => count + 1)}
// // //         >
// // //           Count is {count}
// // //         </button>
// // //       </section>

// // //       <div className="ticks"></div>

// // //       <section id="next-steps">
// // //         <div id="docs">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#documentation-icon"></use>
// // //           </svg>
// // //           <h2>Documentation</h2>
// // //           <p>Your questions, answered</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://vite.dev/" target="_blank">
// // //                 <img className="logo" src={viteLogo} alt="" />
// // //                 Explore Vite
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://react.dev/" target="_blank">
// // //                 <img className="button-icon" src={reactLogo} alt="" />
// // //                 Learn more
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //         <div id="social">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#social-icon"></use>
// // //           </svg>
// // //           <h2>Connect with us</h2>
// // //           <p>Join the Vite community</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://github.com/vitejs/vite" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#github-icon"></use>
// // //                 </svg>
// // //                 GitHub
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://chat.vite.dev/" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#discord-icon"></use>
// // //                 </svg>
// // //                 Discord
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://x.com/vite_js" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#x-icon"></use>
// // //                 </svg>
// // //                 X.com
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#bluesky-icon"></use>
// // //                 </svg>
// // //                 Bluesky
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </section>

// // //       <div className="ticks"></div>
// // //       <section id="spacer"></section>
// // //     </>
// // //   )
// // // }

// // // useEffect(() => {
// // //   console.log("App component mounted");
// // // return () => {
// // //     console.log("App component unmounted");
// // //   }
// // // }, []);

// // // export default App
// // // import React, {useState} from 'react'

// // // function App() {
// // //   console.log("App component rendered");
// // //   const [count, setCount] = useState(0)
// // //   const handleIncrement = ()=>{
// // //     setCount(count + 1)
// // //   }
// // //   return (
// // //     <div>
// // //       <h1>React Counter</h1>

// // //       <p>Current Count : {count}</p>

// // //       <button onClick={handleIncrement}>Click me to increase</button>

// // //     </div>
// // //   )
// // // }

// // // export default App

// // import React, { useState, useEffect } from 'react';
// // import Auth from '../Component/Authentication/Auth';

// // function App(){
// //   const [count, setCount] = useState(0);
// //   const [count2, setCount2] = useState(0);
// //   useEffect(()=>{
// //     console.log("Count changed to: ", count);
// //     document.title = `Count: ${count}`;
// //   }, )
// //   return(
// //     <div className="App">
// //       {/* <div className="count">
// //           <h1>Count: {count}</h1>
// //           <button onClick={() => setCount(count + 1)}>Increment Count</button>
// //       </div>
// //       <div className="count2">
// //           <h1>Count2: {count2}</h1>
// //           <button onClick={() => setCount2(count2 + 1)}>Increment Count2</button>
// //       </div> */}
// //       <Auth/>
// //     </div>
// //   )
// // }

// // export default App;

// import React from 'react'
// import AddStudentComponent from '../Component/AddStudentComponent/AddStudentComponent';

// function App() {
//   const [studentsCount,setStudentsCount] = React.useState(0)
//   function onAddStudent() {
//     console.log("Add Student button clicked");
//     setStudentsCount(studentsCount + 1)
//     console.log("Total Students: ", studentsCount + 1)
//   }
//   return (
//    <AddStudentComponent onAddStudent={onAddStudent}/>
//   )
// }

// export default App

// // BrowserRouter
// // Routes
// // Link
// // Route

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Navbar from "../Component/Navbar/Navbar"
import Notfound from "../Pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

// You have to combine all the topics you have learnt in React till now and try to build a small project using it.
// Project Defitinion : A simple student management system where you can add students and view the list of students. You can also implement authentication to restrict access to certain pages. Use React Router for navigation between pages.