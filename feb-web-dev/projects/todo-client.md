📋 Problem Statement
In an age of digital distractions, maintaining focus is a challenge. Users need a lightweight, browser-based tool to organize their daily tasks without the need for an account, internet connection, or complex setup.

The goal is to build a Client-Side Todo Application that allows users to manage their personal productivity locally. The application must be intuitive, responsive, and—most importantly—it must persist data so that tasks are not lost when the browser tab is closed or refreshed.

🛠 Required Features
To make this a comprehensive learning experience, I’ve broken the requirements down into three tiers.

1. Core Functionality (The Basics)
Task Input: A clear input field where users can type a task and add it by pressing "Enter" or clicking an "Add" button.

Task List Display: A clean list showing all current tasks.

Mark as Complete: A checkbox or toggle to strike through completed items.

Delete Task: A "Remove" or "Trash" icon for individual tasks.

Persistence: Use LocalStorage to ensure tasks remain saved in the user's browser.

2. Enhanced User Experience (Intermediate)
Empty State: Display a friendly message (e.g., "Hooray! No tasks for today") when the list is empty.

Input Validation: Prevent users from adding empty tasks or tasks consisting only of spaces.

Task Counter: A dynamic display showing the number of remaining tasks (e.g., "3 items left").

Edit Capability: Allow users to double-click a task to rename it.

3. Advanced Features (Optional/Bonus)
Filtering: Tabs to filter the view by "All," "Active," and "Completed" tasks.

Clear Completed: A single button to wipe out all finished tasks at once.

Dark Mode: A toggle for users who prefer a darker interface.

Timestamps: Show when a task was created.

💡 Technical Concepts Covered
By completing this project, your students will demonstrate mastery in:

HTML5 Semantic Tags: Using <input>, <ul>, and <li> correctly.

CSS Flexbox/Grid: For a responsive, centered layout.

JavaScript Event Listeners: Handling click, submit, and DOMContentLoaded.

JSON Handling: Using JSON.stringify() and JSON.parse() to move data in and out of LocalStorage.