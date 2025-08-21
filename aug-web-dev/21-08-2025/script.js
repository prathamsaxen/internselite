console.log("Hello World!"); // Print the Data
// Variables
// const let var
let name = "Pratham Saxena";
console.log(name);
var data = "Software Engineer";
console.log(data);
const content = "Full Stack Developer";
console.log(content);

// const vs let/var
// Constant - means value can not be changed.
// let/var - we can change the value

name = "Pratham";
console.log(name);
// content="Hey";

// Loops
// It is the way to rerun your code snippet again and again till the number of execution you want.
// 1. For | While | Do While
// index++ = (index = index+1)
// for(let index=2;index<10;index++)
// {
//     if(index%2===0)
//     {
//         console.log(index);
//     }
//     else{
//         console.log('Not Even Number');
//     }
// }
// If Else - Conditional Statements
//

// if(name==='Pratham')
// {
//     console.log("Yes");
// }
// else
// {
//     console.log("No");
// }

// 4! =  4 * 3 * 2
let number = 4;
let result = 1;
while (number > 1) {
  result = result * number;
  number--;
}
console.log(result);

function sum(a, b, operation) {
  if (operation === "+") {
    console.log(a + b);
  } else {
    console.log(a - b);
  }
}

sum(10, 20, '+');
sum(25, 20);
sum(10, 45);
sum(13, 20);

// let wrapper=document.getElementById('wrapper');
// document.getElementsByClassName('');
// const currentDiv = document.getElementById("wrapper");
// const newDiv = document.createElement("div");
// const newContent = document.createTextNode("Hi there and greetings!");
// newDiv.appendChild(newContent);
// // Append newDiv inside wrapper (if wrapper exists)
// if (wrapper) {
//   wrapper.appendChild(newDiv);
// } else {
//   // fallback: append to body
//   document.body.appendChild(newDiv);
// }

console.log(document)
console.log(wrapper);

let initialVariable=0;
let plusButton=document.getElementById('plus-btn');
let minusButton=document.getElementById('minus-btn');

const updateValue=()=>{
    document.getElementById('value').innerHTML=initialVariable;
}

const plusFunction=()=>{
    initialVariable++;
    updateValue();
}

const minusFunction=()=>{
    initialVariable--;
    updateValue();
}

plusButton.addEventListener('click',plusFunction);
minusButton.addEventListener('click',minusFunction);
