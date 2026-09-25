# Task Manager — 23 September 2026

Session notes for the **September Web Development** batch. This folder is a small task manager built with HTML, CSS, and vanilla JavaScript. Open `index.html` in a browser. No server or install is required.

## Contents

- [What this session covers](#what-this-session-covers)
- [Files in this folder](#files-in-this-folder)
- [What you can do in the app](#what-you-can-do-in-the-app)
- [How a task is stored](#how-a-task-is-stored)
- [How the code is wired](#how-the-code-is-wired)
- [Concepts used in `script.js`](#concepts-used-in-scriptjs)
- [Try it](#try-it)
- [What this version does not do yet](#what-this-version-does-not-do-yet)

## What this session covers

| Topic | Where it shows up |
| --- | --- |
| Page structure | `index.html` — input, buttons, task list |
| Layout and buttons | `<style>` block in `index.html` |
| Reading and updating the page | `document.getElementById`, `innerHTML`, `addEventListener` |
| App data | `tasks` array of objects |
| Building the list | `map()`, template literals |
| Showing a subset | `filter()` inside `renderTaskOnUI()` |
| Finding one task | `find()` inside `toggleTask()` |

## Files in this folder

```text
23-septemeber-2026/
├── index.html    page structure and CSS
├── script.js     task logic
└── Readme.md     these notes
```

`index.html` holds the screen: theme buttons, the task input, **Add Task**, the three filter buttons, and an empty `<ul id="task-list">`. Styles live in the same file. `script.js` is loaded at the bottom of the page.

## What you can do in the app

| Action | Control | What changes |
| --- | --- | --- |
| Add a task | **Add Task** | A new object is pushed into `tasks` and a new `<li>` is appended |
| Mark done or not done | Checkbox on a task | `toggleTask(id)` flips `completed` and redraws the list |
| See every task | **All Tasks** | `renderTaskOnUI("all")` |
| See unfinished tasks | **Active Tasks** | `renderTaskOnUI("active")` keeps tasks where `completed` is `false` |
| See finished tasks | **Completed Tasks** | `renderTaskOnUI("completed")` keeps tasks where `completed` is `true` |
| Switch theme | **Dark Theme** / **Light Theme** | Sets `document.body` background and text color |

## How a task is stored

Every task is one object in the `tasks` array in `script.js`:

```javascript
const tasks = [];

// shape of one task
{ id: 1, title: "Learn JavaScript", completed: false }
```

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | number | Used by the checkbox to call `toggleTask(id)`. New tasks use `tasks.length + 1`. |
| `title` | string | Text from the input. Shown inside the `<span>`. |
| `completed` | boolean | `false` when created. The checkbox sets `checked` when this is `true`. |

## How the code is wired

```text
index.html
  #taskInput, #addTask, #task-list
  #allTasks, #activeTasks, #completedTasks
  #darkTheme, #lightTheme
        │
        ▼
script.js
  tasks[]  ─────────────── data
  renderTaskOnUI(category) ─ redraws #task-list for all / active / completed
  toggleTask(id) ─────────── find the task, flip completed, redraw every task
  Add Task click ─────────── push a task, append one <li>
  theme clicks ───────────── change body background and color
```

`renderTaskOnUI` is the filter path. Adding a task and toggling a checkbox update the list on their own, so a filter can be replaced by the full list after those actions.

## Concepts used in `script.js`

**Select an element**

```javascript
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("task-list");
```

**Turn tasks into HTML with `map()`**

```javascript
taskList.innerHTML = tasks.map(task => `
  <li>
    <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${task.id})">
    <span>${task.title}</span>
  </li>
`).join("");
```

`${...}` inserts a value into the string. `.join("")` turns the array of strings into one HTML string.

**Keep only some tasks with `filter()`**

```javascript
tasks.filter(task => !task.completed)   // active
tasks.filter(task => task.completed)     // completed
```

**Find one task with `find()`, then flip it**

```javascript
function toggleTask(id) {
  const task = tasks.find(task => task.id === id);
  task.completed = !task.completed;
}
```

**React to a click**

```javascript
addTask.addEventListener("click", () => {
  const newTask = { id: tasks.length + 1, title: taskInput.value, completed: false };
  tasks.push(newTask);
});
```

## Try it

1. Open `index.html` in a browser.
2. Type a task and click **Add Task**. It appears in the list.
3. Check the box. `completed` becomes `true`.
4. Click **Active Tasks**, then **Completed Tasks**, then **All Tasks**.
5. Click **Dark Theme**, then **Light Theme**.

Refreshing the page clears the list. Tasks exist only in the `tasks` array while the page is open.

## What this version does not do yet

- Save tasks or the theme after refresh (`localStorage` is the usual next step)
- Edit or delete a task
- Block an empty title
- Keep the current filter after adding or toggling a task
- Separate CSS into its own file

Useful next exercises: a delete button, `localStorage.setItem` / `getItem` so tasks survive refresh, and calling `renderTaskOnUI` from add and toggle so the active filter stays in place.
