# Task Manager Application

A simple **Task Manager Web Application** built using **HTML, CSS, and Vanilla JavaScript**.

The application allows users to create tasks, mark tasks as completed, filter tasks based on their status, and switch between light and dark themes.

---

## 📌 Project Overview

The Task Manager Application is a beginner-friendly JavaScript project designed to demonstrate important concepts of frontend web development.

The project focuses on:

* HTML structure
* CSS styling
* JavaScript DOM manipulation
* JavaScript arrays and objects
* Functions
* Event handling
* Array methods such as `map()`, `filter()`, and `find()`
* Conditional rendering
* Managing application state
* Dynamic UI updates

---

## ✨ Features

### 1. Add New Tasks

Users can enter a task in the input field and click **Add Task**.

Each task contains:

```javascript
{
  id: 1,
  title: "Complete JavaScript Assignment",
  completed: false
}
```

---

### 2. Display Tasks

All created tasks are dynamically displayed inside the task list.

Each task contains:

* Checkbox
* Task title
* Unique task ID

Example:

```text
☐ Complete JavaScript Assignment
☐ Learn DOM Manipulation
☑ Submit Project
```

---

### 3. Mark Tasks as Completed

Users can click the checkbox associated with a task.

When the checkbox is selected:

```javascript
task.completed = true;
```

When it is selected again:

```javascript
task.completed = false;
```

The application uses the `toggleTask()` function to update the task status.

---

### 4. Filter Tasks

The application provides three filtering options:

#### All Tasks

Displays every task.

```javascript
renderTaskOnUI("all");
```

#### Active Tasks

Displays only incomplete tasks.

```javascript
renderTaskOnUI("active");
```

#### Completed Tasks

Displays only completed tasks.

```javascript
renderTaskOnUI("completed");
```

The filtering is performed using JavaScript's `filter()` method.

---

### 5. Light and Dark Theme

Users can switch between:

* Light Theme
* Dark Theme

The theme is changed using JavaScript by modifying the body's styles.

```javascript
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
```

---

## 🛠️ Technologies Used

| Technology | Purpose                             |
| ---------- | ----------------------------------- |
| HTML5      | Structure of the application        |
| CSS3       | Styling and layout                  |
| JavaScript | Application logic and interactivity |
| DOM API    | Updating the webpage dynamically    |

---

## 📁 Project Structure

```text
task-manager/
│
├── index.html
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the Task Manager application.

It includes:

* Task input
* Add Task button
* Filter buttons
* Task list
* Theme buttons

### `script.js`

Contains the application's JavaScript logic.

It handles:

* Creating tasks
* Rendering tasks
* Completing/uncompleting tasks
* Filtering tasks
* Handling button clicks
* Switching themes

### `README.md`

Contains documentation and information about the project.

---

## 🧠 Task Data Structure

Tasks are stored inside a JavaScript array.

```javascript
const tasks = [];
```

Each task follows this structure:

```javascript
{
  id: 1,
  title: "Learn JavaScript",
  completed: false
}
```

### Properties

| Property    | Type    | Description                             |
| ----------- | ------- | --------------------------------------- |
| `id`        | Number  | Unique identifier for the task          |
| `title`     | String  | Name/description of the task            |
| `completed` | Boolean | Indicates whether the task is completed |

---

## 🔄 How the Application Works

The basic application flow is:

```text
User enters task
       ↓
Clicks "Add Task"
       ↓
New task object is created
       ↓
Task is added to tasks array
       ↓
Task is displayed on the UI
       ↓
User can mark task as completed
       ↓
Task status is updated
       ↓
User can filter tasks
```

---

## 🔑 Important JavaScript Concepts

### `map()`

The `map()` method is used to convert task objects into HTML elements.

Example:

```javascript
tasks.map(task => `
  <li>
    <input type="checkbox">
    <span>${task.title}</span>
  </li>
`)
```

---

### `filter()`

The `filter()` method is used to display specific categories of tasks.

Active tasks:

```javascript
tasks.filter(task => !task.completed)
```

Completed tasks:

```javascript
tasks.filter(task => task.completed)
```

---

### `find()`

The `find()` method is used to locate a particular task using its ID.

```javascript
const task = tasks.find(task => task.id === id);
```

---

### Template Literals

Template literals are used to dynamically generate HTML.

```javascript
`
<li>
  <span>${task.title}</span>
</li>
`
```

The `${}` syntax allows JavaScript values to be inserted into HTML strings.

---

### DOM Manipulation

JavaScript accesses HTML elements using:

```javascript
document.getElementById()
```

For example:

```javascript
const taskInput = document.getElementById("taskInput");
```

The application then updates the webpage using:

```javascript
taskList.innerHTML = ...
```

---

## 🚀 How to Run the Project

### Step 1: Clone the Repository

```bash
git clone <repository-url>
```

### Step 2: Open the Project

Navigate into the project directory:

```bash
cd task-manager
```

### Step 3: Run the Application

Open:

```text
index.html
```

in a web browser.

No backend server or database is required.

---

## 🧪 Example Usage

### Add a Task

Enter:

```text
Complete JavaScript Assignment
```

and click:

```text
Add Task
```

The task will appear in the list.

### Complete a Task

Click the checkbox:

```text
☑ Complete JavaScript Assignment
```

### View Active Tasks

Click:

```text
Active Tasks
```

Only incomplete tasks will be displayed.

### View Completed Tasks

Click:

```text
Completed Tasks
```

Only completed tasks will be displayed.

### Change Theme

Click:

```text
Dark Theme
```

or:

```text
Light Theme
```

---

## ⚠️ Current Limitations

This is a basic frontend project and currently has some limitations:

* Tasks are not stored in `localStorage`.
* Refreshing the page removes all tasks.
* There is no backend/database.
* Tasks cannot currently be edited.
* Tasks cannot currently be deleted.
* There is no task priority system.
* There is no due-date functionality.
* Theme preference is not persisted after refreshing the page.

---

## 🔮 Future Improvements

The project can be extended with the following features:

### Task Deletion

Add a delete button:

```text
☐ Learn JavaScript       [Delete]
```

### Edit Tasks

Allow users to modify existing task titles.

### Local Storage

Store tasks using:

```javascript
localStorage.setItem()
```

and retrieve them using:

```javascript
localStorage.getItem()
```

This would allow tasks to remain available after refreshing the browser.

### Task Priority

Add:

* Low
* Medium
* High

priority levels.

### Due Dates

Allow users to assign deadlines to tasks.

### Search

Add a search box to find tasks by title.

### Persistent Theme

Store the selected theme in `localStorage`.

### Responsive Design

Improve the interface for:

* Mobile phones
* Tablets
* Desktop screens

---

## 📚 Learning Objectives

After completing this project, a student should understand:

* How HTML elements are structured
* How CSS is used to style webpages
* How JavaScript interacts with HTML
* How to select DOM elements
* How event listeners work
* How arrays and objects store application data
* How `map()`, `filter()`, and `find()` work
* How to dynamically generate HTML
* How application state can be managed using JavaScript
* How user actions can update the UI

---

## 👨‍💻 Project Type

**Frontend Web Development Project**

### Difficulty

Beginner → Intermediate

### Prerequisites

Basic knowledge of:

* HTML
* CSS
* JavaScript fundamentals
* Arrays
* Objects
* Functions
* DOM manipulation

---

## 📄 License

This project is created for **educational and learning purposes**.
