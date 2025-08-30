import React from 'react'
import './Common.css'

function Header(props) {
  return (
    <div className='wrapper header'>Header - {props.title}</div>
  )
}

export default Header