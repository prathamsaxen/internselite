import React, { useContext } from 'react'
import NameContext from '../Context/NameContext'
function Button(props) {
    const {name}=useContext(NameContext);
    console.log(name);
  return (
    <button onClick={()=>props.logic()}>{props.title} Button</button>
  )
}

export default Button