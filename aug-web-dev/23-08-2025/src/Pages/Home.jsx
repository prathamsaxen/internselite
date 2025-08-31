import React from "react";
import "./common.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper">
      Home
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Home;
