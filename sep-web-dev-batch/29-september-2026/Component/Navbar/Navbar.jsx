import React from 'react';
import {NavLink} from 'react-router';

function Navbar() {
  return (
    <div>
        <NavLink to="/">Home</NavLink> {" | "}
        <NavLink to="/about">About</NavLink> {" | "}
        <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default Navbar