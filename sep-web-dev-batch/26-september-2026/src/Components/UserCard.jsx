import React from 'react'
import './Usercard.css'
function UserCard(props) {
   console.log(props);
  return (
    <div className="user-card">
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h3>Email: {props.email}</h3>
        <h4>City: {props.city}</h4>
        <h5>Country: {props.country}</h5>
        <h6>Phone: {props.phone}</h6>
        <h7>Address: {props.address}</h7>
        <h8>Zip: {props.zip}</h8>
        <h9>State: {props.state}</h9>
    </div>
  )
}

export default UserCard