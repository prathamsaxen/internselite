const express = require('express');
const router = express.Router();
const controller = require('../controller/todoContoller');

router.post("/",controller.createTodo);
router.get("/",controller.getTodos);
router.patch("/:id",controller.updateTodo);
router.delete("/:id",controller.deleteTodo);

module.exports = router;