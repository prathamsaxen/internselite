import React, { useContext } from 'react'
import NameContext from '../Context/NameContext'

function B() {
    const { name} =useContext(NameContext);
  return (
    <div>Component B {name}</div>
  )
}

export default B