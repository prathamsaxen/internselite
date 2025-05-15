console.log("Script File Connected");

// Print Statement 
// Whatever you want to print in console or terminal that you will do with console.log() in javaScript
// String -> A Simple Text

// console.log(2+2) 


// Variables
// As We know that will be stored memory
// Unique Address -> Memory Address

// LET , CONST and VAR
// INT , CHAR, FLOAT

let name = "Pratham Saxena";
name ="Pratham"
console.log(name);

// const the value which you assign to constant won't be change
const occupation = 'Software Engineer';
console.log(occupation);

// If Else Statement 
// Conditional Statement

if(occupation==='Software Engineer')
{
    console.log(true);
}
else if(occupation==='Software Developer')
{
    console.log("Middle Condition");
}
else
{
    console.log(false);
}

// For While Do While

for(let index=0;index<10;index=index+1)
{
    console.log(`Iteration => ${index+1}`)
}

// Calculate the sum of first 100 numbers in JS?
// Check whethere the number is odd or even?

// let number=prompt("Enter a Value");
// console.log(number);

// let consent = confirm("Are you eligible to drive?");
// // console.log(consent)
// printHelloWorld();


// function printHelloWorld(){
//     console.log("Hello World!");
// }

// // const printHelloWorld=()=>{
// //     console.log("Hello World")
// // }

// printHelloWorld();



// printHelloWorld();
// let arr = [1,2,3,4,"Hello World",true];
// console.log(arr);
// Suppose there is a condition 
// Operations over array
// Access operation
// console.log(arr[5]);
// Zero to length - 1;


// Try Catch Block || EXception Handling
// try{
//     const apple="APPLE";
//     apple="MANGO";
// }
// catch(err)
// {
//     console.log(err);
// }
// console.log("Pratham")

// function calculate(a, b, operation) {
//   let result;

//   switch (operation) {
//     case 'sum':
//       result = a + b;
//       break;
//      case 'minus':
//       result = a - b;
//       break;
//     default:
//       result = 'Invalid operation';
//   }

//   return result;
// }

// // Example usage:
// console.log(calculate(5, 3, 'minu')); // Output: 8


// for(let index=0;index<10;index++)
// {
//     if(index===5)
//     {
//         continue;
//     }
//     console.log(index);
// }

// Asynchronus programming?

console.log(
"A"
)

console.log(
"B"
)


console.log(
"C"
)

//  ASync -> AWAIT
// Event Bubbling

// setTimeout(()=>{
//     console.log("Pratham SAxwna with TimeOut")
// },5000)

// setInterval(()=>{
//     console.log("HERE I am");
// },3000)

// Objects are the ways to store your data in the form of key and value pair
const data={
    name:"Pratham Saxena",
    occupation:"Software Engineer"
}

console.log(data);