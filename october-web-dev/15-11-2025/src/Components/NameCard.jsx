import React from 'react';
import "./NameCard.css"

function NameCard(props) {
  return (
    <div className='card'>{props.name}</div>
  )
}

export default NameCard