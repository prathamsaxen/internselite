📋 Problem Statement
Local productivity tools are limited by the hardware they reside on. Users today require data portability and persistence—the ability to manage their tasks on a laptop at work and see those same updates on a mobile device at home.

The goal is to build a robust Full Stack Todo Application. Students must develop a frontend interface that communicates with a custom-built backend API. This API will handle the business logic and interface with a persistent database, ensuring that task data is securely stored and globally accessible via authenticated requests.

🛠 Required Features
1. Backend & API (The Engine)
RESTful API Design: Create structured endpoints for CRUD operations:

GET /tasks - Retrieve all tasks.

POST /tasks - Create a new task.

PUT /tasks/:id - Update task status or text.

DELETE /tasks/:id - Remove a task.

Database Integration: Use a database (SQL like PostgreSQL/MySQL or NoSQL like MongoDB) to store task objects.

Schema Design: Define a Task model with fields like id, title, is_completed, and created_at.

2. Frontend Integration (The Interface)
Asynchronous State: Use fetch or Axios to sync the UI with the database without refreshing the page.

Loading States: Show a spinner or "Saving..." indicator while the API request is in flight.

Error Handling: Display "Toast" notifications if the server is down or if a request fails.

3. Advanced Features (The Polish)
User Authentication: Allow users to Register/Login (using JWT or Sessions) so each user only sees their own tasks.

Search & Sort: Server-side filtering to search for specific tasks or sort them by date created.

Environment Variables: Securely handle database credentials using .env files.

🏗 System Architecture
To succeed, students need to understand how data flows through the different layers of the application.

Layer	Responsibility	Technology Examples
Frontend	UI/UX & API calls	React, Vue, or Vanilla JS
Backend	Logic & Routing	Node.js (Express), Python (FastAPI), or Go
Database	Persistent Storage	MongoDB, PostgreSQL, or SQLite
🎓 Learning Objectives
By completing the Full Stack version, students will master:

CORS (Cross-Origin Resource Sharing): Managing permissions between the frontend and backend.

HTTP Status Codes: Correctly using 201 Created, 200 OK, 404 Not Found, and 500 Server Error.

Database Relationships: Mapping code objects to database rows/documents.

Security Best Practices: Sanitizing user input to prevent SQL Injection or XSS.