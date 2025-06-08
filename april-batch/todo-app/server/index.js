const express=require('express');
const app=express();
const db=require('./config/db');
const todoRoutes=require('./routes/todo');
const authRoutes=require('./routes/auth');

db();

app.use(express.json());

app.use('/api/todos',todoRoutes)
app.use('/api/auth',authRoutes)

app.listen(3000,()=>{
    console.log(
        "Server Established at Port at 3000"
    );
});