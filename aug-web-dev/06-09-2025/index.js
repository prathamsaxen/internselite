const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const { getAllTask, addTodo, deleteTodo } = require("./controllers/todo-controller");

connectDB();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/todo", getAllTask);
app.post("/todo", addTodo);
app.delete("/todo/:id", deleteTodo);

// app.get("/test", (req, res) => {
//   res.send("Server is Healthy");
// });

// app.post("/data", (req, res) => {
//   console.log("Request Hit");
//   console.log(req.body);
//   res.send("POST HIT Successfully");
// });

// app.delete("/delete/:id", (req, res) => {
//   console.log(req?.params?.id);
//   res.send("Data Element Deleted");
// });

app.listen(8000, () => {
  console.log(`Server Is Established over PORT number = 8000`);
});

// nodemon?
// CRUD Operations
// 1. CREATE - POST
// 2. READ - GET
// 3. UPDATE - PATCH | PUT
// 4. DELETE - DELETE
// How to Pass Data from frontend to backend?
// BodyParser
// Schemas
// MongoDB
