// What is JavaScript?
// JavaScript is a programming language that allows you to implement complex features on web pages.
// Use it to create web pages, interact with users, and much more.

// ways to use JavaScript?
// 1. Inline
// 2. Internal
// 3. External


document.getElementById('click-btn').addEventListener('click', function() {
    alert('Button Clicked With External Script');
});


var name = 'Pratham';
let data = 'Saxena';
const age = 20;

let conditions = true;

console.log(name, data, age);

// Aritchmatic Operators
// +, -, *, /, %, **
// ++, --
// +=, -=, *=, /=, %=, **=
// ==, ===, !=, !==
// >, <, >=, <=
// &&, ||, !
// ?:
// ,

// Var vs Let vs Const ---> HW?

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

//Comparison Operators
console.log(2==2);
console.log(2===2);
console.log(2!=2);
console.log(2!==2);
console.log(2>2);
console.log(2<2);
console.log(2>=2);
console.log(2<=2);

// Logical t
console.log(true && true);
console.log(false || false);

// Loops 
// for, while, do while, 

console.log("Pratham Saxena");
console.log("Pratham Saxena");
console.log("Pratham Saxena");
console.log("Pratham Saxena");
console.log("Pratham Saxena");
console.log("Pratham Saxena");console.log("Pratham Saxena");
console.log("Pratham Saxena");
console.log("Pratham Saxena");

for(let index=0;index<1000;index++)
{
    console.log("Pratham Saxena");
}

let loopIndex = 0;

while(loopIndex<1000)
{
    console.log("Pratham Saxena");
    loopIndex++;
}
loopIndex = 0;

do
{
    console.log("Pratham Saxena");
    loopIndex++;
} while(loopIndex<1000);


function add(a,b){
    console.log(a+b);
    return a+b;
}



add(5,10);
add(16,10);
add(5,13);
add(5,1222);
// Data Types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol


if(age<18){
    console.log("You are not eligible to vote");
}
else{
    console.log("You are eligible to vote");
}


// Arrays 
// [1,2,3,4,5,6,7,8,9,10]


const arrayData = [1,2,3,4,5,6,7,8,9,10];
// [1,2,3,4,5,6,7,8,9,10]

console.log(arrayData[0]);
console.log(arrayData[1]);
console.log(arrayData[2]);
console.log(arrayData[3]);
console.log(arrayData[4]);
console.log(arrayData[5]);
console.log(arrayData[6]);
console.log(arrayData[7]);
console.log(arrayData[8]);
console.log(arrayData[9]);