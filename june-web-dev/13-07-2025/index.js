const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Backend is Running Properly");
});

app.listen(3000,()=>{
    console.log("Server is Running on Port 3000");
});