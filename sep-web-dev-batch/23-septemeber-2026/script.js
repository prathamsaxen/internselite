console.log("Hello World");

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("task-list");
const allTasks = document.getElementById("allTasks");
const activeTasks = document.getElementById("activeTasks");
const completedTasks = document.getElementById("completedTasks");


const renderTaskOnUI = (category) => {
    if (category === "all") {
        taskList.innerHTML = tasks.map(task => `
        <li>
            <input type="checkbox" ${task.completed ? "checked" : ""} id="task-${task.id}" onchange="toggleTask(${task.id})">
            <span>${task.title}</span>
        </li>
    `).join("")
    }
    else if (category === "active") {
        taskList.innerHTML = tasks.filter(task => !task.completed).map(task => `
        <li>
            <input type="checkbox" ${task.completed ? "checked" : ""} id="task-${task.id}" onchange="toggleTask(${task.id})">
            <span>${task.title}</span>
        </li>
    `).join("")
    }
    else if (category === "completed") {
        taskList.innerHTML = tasks.filter(task => task.completed).map(task => `
        <li>
            <input type="checkbox" ${task.completed ? "checked" : ""} id="task-${task.id}" onchange="toggleTask(${task.id})">
            <span>${task.title}</span>
        </li>
    `).join("")
    }
    else {
        taskList.innerHTML = tasks.map(task => `
        <li>
            <input type="checkbox" ${task.completed ? "checked" : ""} id="task-${task.id}" onchange="toggleTask(${task.id})">
            <span>${task.title}</span>
        </li>
    `).join("")
    }
}


const tasks = [
    // {id:1, title:"Task 1", completed:false},
    // {id:2, title:"Task 2", completed:false},
    // {id:3, title:"Task 3", completed:false},
];
// Basic Task Schema
// {id:1, title:string, completed:boolean}


taskList.innerHTML = tasks.map(task => `
    <li>
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <span>${task.title}</span>
    </li>
`).join("");

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    console.log(task);
    task.completed = !task.completed;
    taskList.innerHTML = tasks.map(task => `
    <li>
        <input type="checkbox" ${task.completed ? "checked" : ""} id="task-${task.id}" onchange="toggleTask(${task.id})">
        <span>${task.title}</span>
    </li>
`).join("")
}

addTask.addEventListener("click", () => {
    const newTask = { id: tasks.length + 1, title: taskInput.value, completed: false };
    tasks.push(newTask);
    taskList.innerHTML += `
   <li>
        <input type="checkbox" id="task-${newTask.id}" onchange="toggleTask(${newTask.id})" ${newTask.completed ? "checked" : ""}>
        <span>${newTask.title}</span>
    </li>
   `;
});


allTasks.addEventListener("click", () => {
    renderTaskOnUI("all");
});

activeTasks.addEventListener("click", () => {
    renderTaskOnUI("active");
});

completedTasks.addEventListener("click", () => {
    renderTaskOnUI("completed");
});

const darkTheme = document.getElementById("darkTheme");
const lightTheme = document.getElementById("lightTheme");

darkTheme.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

lightTheme.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});