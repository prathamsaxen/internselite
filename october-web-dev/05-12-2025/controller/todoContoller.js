const Todo = require("../schemas/Todo");
const mongoose = require("mongoose");

// Create Task
exports.createTodo = async (req, res) => {
  console.log(req.body);
  try {
    const { title, description, completed } = req.body;
    if (!title || !title.trim() === "") {
      return res.status(400).json({ error: "Title is missing." });
    }
    const todo = await Todo.create({
      title,
      description,
      completed,
    });
    res.status(201).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get Task
exports.getTodos = async (req, res) => {
  console.log(req.body);

  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


// Update Task
exports.updateTodo = async (req, res) => {
  console.log(req.body);

  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


// Delete Task
exports.deleteTodo = async (req, res) => {
  console.log(req.body);

  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ message: "Todo Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
