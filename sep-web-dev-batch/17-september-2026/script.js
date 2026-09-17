// // console.log('Hello World');
// // console.log(document);
// // const btn = document.querySelector('.btn');

// // btn.addEventListener('click', function() {
// //     alert('Button clicked');
// // });

// // Variables 
// // let , var, const - {constants}
// // 

// let name = "Pratham"; 
// const age = 26;
// let isEngineer = true;
// let data = null;
// // age = 27;
// // name = "John";
// console.log(name);
// console.log(age);
// console.log(isEngineer);
// console.log(typeof isEngineer);
// console.log(data);



// // Data Types 



// // What are functions?
// // A function is a reusable block of code that performs a specific task.

// function greetMe(inputName){
//     console.log("Hello "+ inputName + "!");
// }

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// greetMe("Pratham");
// greetMe("John");
// greetMe("Jane");
// greetMe("Jim");

// let result = addTwoNumbers(1, 2);
// console.log(result);

// const subtractTwoNumbers = (num1, num2) => {
//     return num1 - num2;
// }

// let result2 = subtractTwoNumbers(1, 2);
// console.log(result2);

// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits.push("orange");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// // Task1
// fruits.shift();
// console.log(fruits);
// // Task2
// fruits.unshift("apple");
// console.log(fruits);

// const student = {
//     name: "Pratham",
//     age: 26,
//     isEngineer: true,
// }


// // console.log(student.name);


// // Dom Manipulation - Document Object Model

// const title = document.getElementById('title');
// const titleViaQuerySelector = document.querySelector('#title');
// console.log(title);

// title.textContent = "Hello Pratham";
// titleViaQuerySelector.style.color = "red";

// // title.innerHTML = "Hello World";
// // title.style.color = "red";
// // title.style.fontSize = "20px";
// // title.style.fontWeight = "bold";
// // title.style.textAlign = "center";
// // title.style.backgroundColor = "blue";
// // title.style.padding = "10px";
// // title.style.borderRadius = "5px";
// // title.style.border = "1px solid black";


// const li = document.createElement('li');
// const list = document.querySelector('.list');
// li.textContent = "Item 4";
// list.appendChild(li);


// const input = document.getElementById('input');
// input.addEventListener('input', function(event){
//     console.log(event.target.value);
// });


// // event.preventDefault() -- Task3

let todoInput = document.getElementById('todo-input');
let todoBtn = document.getElementById('todo-btn');
let todoList = document.querySelector('.list');


todoBtn.addEventListener('click', function(){
    
    const todoItem = document.createElement('li');
    todoItem.textContent = todoInput.value;
    todoList.appendChild(todoItem);
});