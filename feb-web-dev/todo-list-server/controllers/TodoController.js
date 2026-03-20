const Todo = require('../models/Todo');
const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }
        const todo = await Todo.create({ title, description });
        if (!todo) {
            return res.status(500).json({ message: 'Failed to create todo' });
        }
        res.status(201).json(todo);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create todo' });
    }
};

const getTodos = async (req, res) => {
    try {
        const { complete } = req.query;
        if (complete === 'all') {
            const todos = await Todo.find();
            res.status(200).json(todos);
        }
        else if (complete === "active") {
            const todos = await Todo.find({ completed: false });
            res.status(200).json(todos);
        }
        else if (complete === "done") {
            const todos = await Todo.find({ completed: true });
            res.status(200).json(todos);
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to get todos' });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Todo ID is required' });
        }
        const { title, description, completed } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }
        const todo = await Todo.findByIdAndUpdate(id, { title, description, completed: completed });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update todo' });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Todo ID is required' });
        }
        const updatingTodo = await Todo.findByIdAndDelete(id);
        if (!updatingTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(updatingTodo);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete todo' });
    }
};

const changeStatusOfTodo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Todo ID is required' });
        }
        const body = req.body;
        if (!body.completed) {
            return res.status(400).json({ message: 'Completed is required' });
        }
        const todo = await Todo.findByIdAndUpdate(id, { completed: body.completed });
        console.log(todo);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }

    catch (error) {
        console.error("Error changing status of todo:", error);
        res.status(500).json({ message: 'Failed to change status of todo' });
    }
}
module.exports = { createTodo, getTodos, updateTodo, deleteTodo, changeStatusOfTodo };