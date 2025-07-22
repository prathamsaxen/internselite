const express=require('express');
const dotenv = require('dotenv');
const cors=require('cors');
const connectDB=require('./config/db');
const todoRoutes=require('./controllers/todoController');

dotenv.config();
const app=express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/todos',todoRoutes);
app.get('/test',(req,res)=>{
    res.send("Server is Healthy");
})
app.listen(process.env.PORT || 4000,()=>{
    console.log("Server is established over PORT number => ",process.env.PORT || 4000)
})