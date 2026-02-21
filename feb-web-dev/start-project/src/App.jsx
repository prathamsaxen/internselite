import './App.css';
import Name from './Components/Name';
import { useState } from 'react';

function App(){
  const name = 'Pratham';
  const age = 20;
  const city = 'New York';
  const country = 'USA';
  const email = 'pratham@gmail.com';
  const phone = '1234567890';
  const address = '123 Main St, New York, NY 10001';
  const zip = '10001';
  const state = 'NY';

  const [names, setNames] = useState(0);
  const [nameList, setNameList] = useState(['Pratham', 'John', 'Jane', 'Jim', 'Jill']);

  const updateNames = () => {
    setNames(names + 1);
  }
  return(
    <div className='app'> 
    {nameList.map((name, index) => (
      <Name key={index} data={name} />
    ))}
    <p>{names}</p>
    <button onClick={updateNames}>Update Names</button>
    </div>
  )
}

export default App;