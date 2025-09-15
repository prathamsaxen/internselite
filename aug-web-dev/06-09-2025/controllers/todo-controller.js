const Todo = require("./../schema/Todo");

// ✅ Get all tasks for a specific user
const getAllTask = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) return res.status(400).json({ error: "User ID missing" });

    const todos = await Todo.find({ user: userId });
    res.json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Add new todo for a user
const addTodo = async (req, res) => {
  try {
    const { task, userId } = req.body;
    if (!task || !userId) {
      return res.status(400).json({ error: "Task or User ID is missing" });
    }

    const newTodo = new Todo({ task, user: userId });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Delete todo (only if belongs to user)
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;      // todo id
    const { userId } = req.body;    // user id (from request)

    const todo = await Todo.findOneAndDelete({ _id: id, user: userId });
    if (!todo) return res.status(404).json({ error: "Todo not found or unauthorized" });

    res.json({ message: "Task Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Update todo (only if belongs to user)
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;      // todo id
    const { task, userId } = req.body;

    if (!task || !userId) {
      return res.status(400).json({ error: "Task or User ID missing" });
    }

    const updatedData = await Todo.findOneAndUpdate(
      { _id: id, user: userId },
      { task },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: "Todo not found or unauthorized" });
    }

    res.json(updatedData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllTask, addTodo, deleteTodo, updateTodo };
