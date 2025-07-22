const express = require("express");
const router = express.Router();
const Todo = require("../schema/todo");

router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create({ name: req.body.name });
    res.status(201).json(todo);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err.message,
    });
  }
});

router.get("/",async(req,res)=>{
    try{
        const todos= await Todo.find();
        res.json(todos);
    }
    catch(err){
         res.status(500).json({
      error: err.message,
    });
    }
})

module.exports=router;