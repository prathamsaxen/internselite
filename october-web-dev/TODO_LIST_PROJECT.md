# Todo List Project

## Overview
Build a full-stack Todo List application using React for the frontend and Node.js/Express with MongoDB for the backend. This project will teach you full-stack development, RESTful API design, database integration, and CRUD operations.

## Learning Objectives
- Understand full-stack application architecture
- Learn RESTful API design and implementation
- Practice MongoDB database operations
- Implement CRUD (Create, Read, Update, Delete) operations
- Learn React state management and API integration
- Understand component composition and data flow

## Project Requirements

### Part 1: Backend Setup (Node.js + Express + MongoDB)

#### 1. Project Setup
- Initialize a new Node.js project
- Install required dependencies:
  - `express` - Web framework
  - `mongoose` - MongoDB ODM
  - `cors` - Enable CORS for frontend communication
- Set up project structure:
  ```
  backend/
  ├── config/
  │   └── db.js
  ├── controller/
  │   └── todoController.js
  ├── routes/
  │   └── TodosRouter.js
  ├── schemas/
  │   └── Todo.js
  └── index.js
  ```

#### 2. Database Configuration (`config/db.js`)
- Connect to MongoDB (local or MongoDB Atlas)
- Handle connection errors
- Export connection function

#### 3. Todo Schema (`schemas/Todo.js`)
Create a Mongoose schema with the following fields:
- `title` (String, required, min 1 char, max 200 chars)
- `description` (String, optional, max 2000 chars)
- `completed` (Boolean, default: false)
- Include timestamps (createdAt, updatedAt)

#### 4. API Routes (`routes/TodosRouter.js`)
Set up Express router with the following endpoints:
- `POST /api/todos` - Create a new todo
- `GET /api/todos` - Get all todos
- `PATCH /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

#### 5. Controller Functions (`controller/todoController.js`)
Implement the following controller functions:

**createTodo**
- Validate that title is provided
- Create new todo in database
- Return created todo with 201 status
- Handle errors appropriately

**getTodos**
- Fetch all todos from database
- Return todos array
- Handle errors

**updateTodo**
- Validate MongoDB ObjectId
- Update todo by ID
- Return updated todo
- Handle "not found" errors

**deleteTodo**
- Validate MongoDB ObjectId
- Delete todo by ID
- Return success message
- Handle "not found" errors

#### 6. Server Setup (`index.js`)
- Create Express app
- Configure middleware:
  - `express.json()` for parsing JSON
  - `cors()` for cross-origin requests
- Connect to database
- Mount routes at `/api/todos`
- Start server on port 3000
- Add basic error handling

### Part 2: Frontend Setup (React)

#### 1. Project Setup
- Create a new React project using Vite
- Set up project structure:
  ```
  frontend/
  ├── src/
  │   ├── components/
  │   │   ├── TodoForm.jsx
  │   │   ├── TodoList.jsx
  │   │   └── TodoItem.jsx
  │   ├── services/
  │   │   └── todoAPI.js
  │   ├── App.jsx
  │   ├── App.css
  │   ├── main.jsx
  │   └── index.css
  └── package.json
  ```

#### 2. API Service (`services/todoAPI.js`)
Create functions to interact with backend API:
- `getTodos()` - Fetch all todos
- `addTodo(todo)` - Create new todo
- `updateTodo(id, updatedData)` - Update existing todo
- `deleteTodo(id)` - Delete todo
- Use `fetch` API with proper error handling
- Set base URL to `http://localhost:3000/api/todos`

#### 3. Components to Build

**TodoForm Component**
- Form with two inputs:
  - Title (required)
  - Description (optional, textarea)
- Submit button
- Form validation (title cannot be empty)
- Clear form after submission
- Call `onAdd` prop function with todo data

**TodoItem Component**
- Display todo title and description
- Show completion status (visual indicator)
- Two buttons:
  - Toggle complete/undo button
  - Delete button
- Apply styling for completed todos (e.g., strikethrough, opacity)
- Call `onToggle` and `onDelete` prop functions

**TodoList Component**
- Receive todos array as prop
- Map through todos and render TodoItem for each
- Display empty state message if no todos exist
- Pass down toggle and delete handlers

**App Component (Main)**
- Manage todos state using `useState`
- Load todos from API on component mount using `useEffect`
- Implement handler functions:
  - `handleAdd` - Add new todo
  - `handleToggle` - Toggle todo completion
  - `handleDelete` - Delete todo
- Update state after each operation
- Render TodoForm and TodoList components

### 4. Features to Implement

#### Core Features (Required)
- ✅ Create new todos with title and description
- ✅ View all todos in a list
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Persist data in MongoDB database
- ✅ Load todos from database on page load
- ✅ Real-time UI updates after operations

#### Bonus Features (Optional)
- 🌟 Edit todo title and description
- 🌟 Filter todos (All, Active, Completed)
- 🌟 Search todos
- 🌟 Due dates for todos
- 🌟 Priority levels
- 🌟 Drag and drop to reorder
- 🌟 Local storage backup
- 🌟 Categories/tags for todos

### 5. Styling Requirements
- Create a clean, modern UI
- Style the form with proper spacing
- Make todo items visually distinct
- Add hover effects on buttons
- Style completed todos differently (e.g., strikethrough, grayed out)
- Ensure responsive design
- Add smooth transitions
- Use consistent color scheme

### 6. Technical Requirements

#### Backend
- Use Express.js for REST API
- Use Mongoose for MongoDB operations
- Implement proper error handling
- Validate input data
- Use appropriate HTTP status codes:
  - 200: Success
  - 201: Created
  - 400: Bad Request
  - 404: Not Found
  - 500: Server Error

#### Frontend
- Use React hooks (useState, useEffect)
- Handle async operations properly
- Update UI optimistically or after API response
- Display loading states (optional)
- Handle errors gracefully

#### Database
- Set up MongoDB (local or MongoDB Atlas)
- Create proper schema with validation
- Use meaningful field names

### 7. Testing Checklist

#### Backend Testing
- [ ] Can create a new todo via POST request
- [ ] Can fetch all todos via GET request
- [ ] Can update a todo via PATCH request
- [ ] Can delete a todo via DELETE request
- [ ] Returns appropriate error for invalid ID
- [ ] Returns appropriate error for missing title
- [ ] Server starts without errors
- [ ] Database connection works

#### Frontend Testing
- [ ] Can add a new todo
- [ ] Todos load on page refresh
- [ ] Can toggle todo completion
- [ ] Can delete a todo
- [ ] Form validation works (can't submit empty title)
- [ ] UI updates immediately after operations
- [ ] Completed todos are visually distinct
- [ ] Empty state displays when no todos exist
- [ ] No console errors

### 8. API Endpoints Reference

```
POST   /api/todos          - Create todo
GET    /api/todos          - Get all todos
PATCH  /api/todos/:id      - Update todo
DELETE /api/todos/:id      - Delete todo
```

#### Request/Response Examples

**Create Todo (POST /api/todos)**
```json
Request Body:
{
  "title": "Learn React",
  "description": "Complete React tutorial",
  "completed": false
}

Response (201):
{
  "_id": "...",
  "title": "Learn React",
  "description": "Complete React tutorial",
  "completed": false,
  "createdAt": "...",
  "updatedAt": "..."
}
```

**Get All Todos (GET /api/todos)**
```json
Response (200):
[
  {
    "_id": "...",
    "title": "Learn React",
    "description": "Complete React tutorial",
    "completed": false,
    "createdAt": "...",
    "updatedAt": "..."
  }
]
```

**Update Todo (PATCH /api/todos/:id)**
```json
Request Body:
{
  "completed": true
}

Response (200):
{
  "_id": "...",
  "title": "Learn React",
  "description": "Complete React tutorial",
  "completed": true,
  "createdAt": "...",
  "updatedAt": "..."
}
```

**Delete Todo (DELETE /api/todos/:id)**
```json
Response (200):
{
  "message": "Todo Deleted"
}
```

### 9. Submission Guidelines
1. Create two separate folders: `backend/` and `frontend/`
2. Set up backend with all required files
3. Set up frontend React application
4. Ensure both servers can run simultaneously
5. Test all CRUD operations
6. Ensure data persists in database
7. Add proper error handling
8. Style the application
9. Ensure code is clean and well-commented

### 10. Resources
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Free cloud database)
- [REST API Best Practices](https://restfulapi.net/)

## Tips for Success
1. **Start with Backend**: Build and test the API first using Postman or Thunder Client
2. **Test Each Endpoint**: Verify each API endpoint works before moving to frontend
3. **Handle Errors**: Always implement proper error handling on both frontend and backend
4. **Validate Data**: Validate input on both client and server side
5. **Use Environment Variables**: Store database connection strings in environment variables
6. **CORS Configuration**: Make sure CORS is properly configured for frontend-backend communication
7. **Database Connection**: Test database connection before implementing routes
8. **Incremental Development**: Build one feature at a time and test it thoroughly

## Common Issues and Solutions

**Issue**: CORS errors
- **Solution**: Make sure `cors` middleware is installed and configured in Express

**Issue**: Cannot connect to MongoDB
- **Solution**: Check connection string, ensure MongoDB is running (if local), or verify Atlas credentials

**Issue**: API calls fail
- **Solution**: Verify backend server is running, check API endpoint URLs, verify request format

**Issue**: State not updating
- **Solution**: Make sure you're updating state after API calls, check async/await usage

---

**Good luck building your Todo List application! ✅**

