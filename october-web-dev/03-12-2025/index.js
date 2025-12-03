const express = require('express');
const app = express();
const connectDB = require('./config/db');
// Body Parser Middleware
app.use(express.json());
connectDB();


// Get the data to frontend
app.get('/ping',(req,res)=>{
    console.log('Server is Healthy');
    res.send('Server is Healthy');
})

// Post the data to backend
app.post('/create',(req,res)=>{
    console.log(req.body);
    res.send('Data is created');
})


// Update the data to backend
app.patch('/update/:id',(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    res.send('Data is updated');
})

// Delete the data to backend
app.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id);
    res.send('Data is deleted');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

// Middlewares?
// Middlewares are used to validate the data before it is sent to the backend.
// Middlewares are used to authenticate the data before it is sent to the backend.
// Middlewares are used to authorize the data before it is sent to the backend.
// Middlewares are used to log the data before it is sent to the backend.
// Middlewares are used to audit the data before it is sent to the backend.
// Middlewares are used to monitor the data before it is sent to the backend.
// Middlewares are used to secure the data before it is sent to the backend.
// Middlewares are used to encrypt the data before it is sent to the backend.
// Middlewares are used to decrypt the data before it is sent to the backend.