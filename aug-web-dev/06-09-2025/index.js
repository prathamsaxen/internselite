const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const { getAllTask, addTodo, deleteTodo, updateTodo } = require("./controllers/todo-controller");
const cors=require('cors');
const User = require('./schema/User');

connectDB();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get("/todo/:userId", getAllTask);
app.post("/todo", addTodo);
app.delete("/todo/:id", deleteTodo);
app.put('/todo/:id',updateTodo)

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

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ msg: "User registered", userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ msg: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    res.json({ msg: "Login successful", userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


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
