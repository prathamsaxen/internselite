import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
        Home
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Home