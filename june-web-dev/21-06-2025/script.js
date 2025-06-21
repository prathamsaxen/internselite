console.log("Pratham Saxena");
// "" or in '' this will be considered as string and the third way we can backticks ` ${}`
// 2 + 2 => 4
// console.log(typeof 2+2);
// Commnets - it is something which is presend in your code base but will be ignored by compiler,
// 1. Single Line
// 2. Multi line
/* console.log("");
 console.log("");
 console.log("");*/

//  Variable it is a kind of reserves space in the memory to add your data simply and utilize that as it is required
// 1. Let  // es6++
// 2. Var

// let age = 5;

// console.log(age);

// var name = "Pratham Saxena";
// console.log(name);

// Data Types and Operators
// let name = "Pratham Saxena";  // string
// let age = 10; // number
// let isEngineer = true; // boolean True/False
// let x=null; // nothing
// let y;
// console.log(isEngineer);
// console.log(x);
// console.log(y);

// // Operators
// console.log(2+3);
// console.log("Hi" + " " + "Pratham");// concantenation - string addition
// console.log(10 == "10");
// console.log(10 === '10');

// Functions is the way to reuse the same code snippet in the general format again and again so that we will can reduce the thread code.

function greet(name) {
  return `GoodMorning ${name}`;
}

// const square = (n)=>{
//     return n*n;
// }

const square = (n) => n * n;
console.log(greet("Pratham"));
console.log(greet("Riddhi"));
console.log(greet("Jay"));
console.log(greet("Soniya"));
console.log(greet("Yashi"));
console.log(greet("Prashant"));
console.log(greet("Akash"));

console.log(square(25));
console.log(square(2));
console.log(square(5));
console.log(square(20));

// console.log(typeof greet)
// console.log(typeof square)

// Conditions is the way to write conditional or you can say if else statements in your code.
function checkDrive(age) {
  if (age >= 18) {
    return "You can drive";
  } else {
    return "You can't drive";
  }
}

console.log(checkDrive(17));
// index = index+1
for (let index = 0; index < 10; index = index + 2) {
  console.log(index);
}

for (let index = 0; index <= 100; index++) {
  if (index % 2 == 0) {
    console.log(index);
  } else {
    console.log("ODD NUMBER");
  }
}

// for while do while
let index = 0;
while (index < 100) {
  console.log("Pratham - ", index);
  index++;
}

//

let names = ["Pratham", "Sneha", "Jay", "Riddhi", "Soniya"];
console.log(names);
console.log(names[2]);
names.push("Akash");
console.log(names);
names.forEach(name=>console.log(name));
let newNames = names.map(name=>name.toUpperCase());
newNames.forEach(name=>console.log(name));

// Object key value
const data={
    name:"Pratham Saxena",
    occupation:"Software Engineer",
    domain:"Architectural Engineer"
}

console.log(data)

