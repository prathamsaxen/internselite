import React from 'react';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';
function TestComponent() {
    const {name}=useContext(DataContext);
    console.log(name);
    return (
    <div>{name}</div>
  )
}

export default TestComponent