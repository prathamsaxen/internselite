const express = require("express");
const router = express.Router();
const Todo = require("../schema/todo");

router.post("/", async (req, res) => {
  try {
    const todo = new Todo({ name: req.body.name,user:req.userId });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/',async(req,res)=>{
    try{
        const todos=await Todo.find({user:req.userId});
        res.json(todos);
    }
    catch(err)
    {
        res.status(500).json({error:err.message});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const index=req.params.id;
        const todo = await Todo.findByIdAndDelete({_id:index});
        // if(!todo)
        // {
        //     return res.status(404).json({error:'Todo not Found'});
        // }
        // await todo.remove();
        res.json({message:"Todo Deleted Successfully"});
    }
    catch(err)
    {
        res.status(500).json({error:err.message});
    }
})

module.exports = router;
