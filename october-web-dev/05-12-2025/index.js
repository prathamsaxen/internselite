const express = require('express');
const app = express();
const connectDB = require('./config/db');
const router = require('./routes/TodosRouter');

connectDB();
app.use(express.json());
app.use('/api/todos',router);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})