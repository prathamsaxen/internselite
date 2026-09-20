console.log("Script is running...");


// Before ES6
function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // Output: 15



// After ES6, we can use arrow functions to define functions in a more concise way.
// const add = (a, b) => {
//     return a + b;
// }

// const add = (a, b) => a + b;

// console.log(add(5, 10)); // Output: 15

const squareFunction = number => number * number;

console.log(squareFunction(5)); // Output: 25


const calculate=(a,b)=>{
    const sum = a + b;
    return sum*2;
}

console.log(calculate(5, 10)); // Output: 30

// Arrow Function with Arrays 
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num=>num*2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Array Destructuing
// It allows us to extract tvalues from arrays and objects and store them direfctly in variables.


const  colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor); // Output: blue

const numbersData = [10, 40, 50];

const [first,,third] = numbersData;

console.log(first); // Output: 10
console.log(third); // Output: 50


const user = {
    name:"Pratham Saxena",
    age: 20,
    city: "Delhi"
}

const {name, age, city} = user;

console.log(name); // Output: Pratham Saxena
console.log(age); // Output: 20
console.log(city); // Output: Delhi

const user2 = {
    name: "John Doe",
    age: 30,
}

const {name: userName, age: userAge} = user2;

console.log(userName); // Output: John Doe
console.log(userAge); // Output: 30


// Spead Operators -> ... (Three dots)
// It allows us to exPAND an array or object into individual elements or properties.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [-1,...arr1, ...arr2,9];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]


const userDetails = {
    name: "John Doe",
    age: 30,
}

const updatedUserDetails = {
    ...userDetails,
    city: "New York",
}

console.log(updatedUserDetails); // Output: { name: 'John Doe', age: 30, city: 'New York' }


// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))

      const getUsers = async () => {
        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(response.ok){
                const data = await response.json();
                console.log(data);
            }else{
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

     getUsers();