import React from 'react'
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div>
        About
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default About