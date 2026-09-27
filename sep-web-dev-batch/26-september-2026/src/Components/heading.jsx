import NestedComponent from './nestedComponent';
function Heading(){
    const name = "Pratham";
    const age = 20;
    return(
        <div style={{border: "1px solid red"}}> 
        <h1 className="heading" htmlFor="name">Hello {name + " Saxena"}</h1>
        <h2 className="subheading" htmlFor="age">Age: {age}</h2>
        <NestedComponent />
        </div>
    )
}

export default Heading;

// Js Variables -> {variable} -> Displayed on UI