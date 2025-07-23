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

router.delete("/:id",async(req,res)=>{
  const documentId=req.params.id;
  try{
    await Todo.findByIdAndDelete(documentId);
    return res.status(200).json({message:"Task Deleted Successfuly"});
  }
  catch(err)
  {
    console.log(err);
  }
});

module.exports=router;