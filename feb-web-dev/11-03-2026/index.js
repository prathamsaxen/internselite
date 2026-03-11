const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const users=[
    {
        id:1,
        name:"Pratham",
        email:"pratham@gmail.com",
        password:"123456"
    },
    {
        id:2,
        name:"John",
        email:"john@gmail.com",
        password:"123456"
    },
    {
        id:3,
        name:"Jane",
        email:"jane@gmail.com",
        password:"123456"
    }
];

app.get('/',(req,res)=>{
    res.json(users).status(200);
});

app.post("/post",(req,res)=>{
    console.log(req.body);
    res.send("Data Recieved Successfully");
});

app.put("/put/:id",(req,res)=>{
    console.log(req.body);
    const {id} = req.params;
    console.log(id);
    const {name,email,password} = req.body;
    const user = users.find((user)=>user.id === parseInt(id));
    if(!user){
        return res.status(404).send("User not found");
    }
    user.name = name;
    user.email = email;
    user.password = password;
    res.send("Data Updated Successfully");
});

app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === parseInt(id));
    if(!user){
        return res.status(404).send("User not found");
    }
    users.splice(users.indexOf(user),1);
    res.send("Data Deleted Successfully");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

// HTTPS METHODS
// GET, POST, PUT, DELETE