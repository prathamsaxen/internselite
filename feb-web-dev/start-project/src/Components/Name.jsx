import React from 'react';
import './Name.css';

function Name(props) {
  return (
    <div className='name'>
        {props.data}
    </div>
  )
}

export default Name