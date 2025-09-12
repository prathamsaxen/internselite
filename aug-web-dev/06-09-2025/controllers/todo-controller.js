const Todo = require("./../schema/Todo");

const getAllTask = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
};

const addTodo = async (req, res) => {
  try {
    if (!req.body.task || !req.body) {
      res.status(400).json({ error: "Task Data is Missing" });
      return;
    }
    const newTodo = new Todo({ task: req.body.task });
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async (req, res) => {
  console.log(req.params.id);
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted" });
};

const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = await Todo.findByIdAndUpdate(id, { task: req.body.task }, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.log(err);
    
    res.status(400).json({ err : err.message || "Internal Server Error" });
  }
};

module.exports = { getAllTask, addTodo, deleteTodo, updateTodo };
