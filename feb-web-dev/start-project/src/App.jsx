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

//Assignment:
// 1. Create a new component called NameList.
// 2. Create a new state called nameList.
// 3. Create a new function called updateNameList.
// 4. Create a new button called Add Name.
// 5. Create a new input field called Name.
// 6. Create a new button called Add Name.
// 7. Create a new button called Remove Name.
// 8. Create a new button called Remove All Names.
// 9. Create a new button called Update Name.
// 10. Create a new button called Update All Names.