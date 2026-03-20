const express = require('express');
const router = express.Router();
const { createTodo, getTodos, updateTodo, deleteTodo, changeStatusOfTodo } = require('../controllers/TodoController');

router.post('/create', createTodo);
router.get('/get', getTodos);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);
router.put('/change-status/:id', changeStatusOfTodo);

module.exports = router;