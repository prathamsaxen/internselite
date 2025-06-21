import React, { useState } from "react";
import NameContext from "./../Context/NameContext";
import Button from "./../Components/Button";
import { NavLink } from "react-router-dom";


function Home() {
    const data = "Pratham Saxena";
  const [number, setNumber] = useState(0);
  const increaseValue = () => {
    setNumber(number + 1);
  };

  const decreaseValue = () => {
    setNumber(number - 1);
  }
  return (
    <>
      <NameContext.Provider value={{ name: "Pratham Saxena Context API" }}>
        <Button title="Plus" logic={increaseValue} />
        <h1> {number}</h1>
        {number > 0 ? <Button title="Minus" logic={decreaseValue} /> : null}
      </NameContext.Provider>
     <NavLink to={'/navigate'}>Navigation</NavLink>
    </>
  );
}

export default Home;
