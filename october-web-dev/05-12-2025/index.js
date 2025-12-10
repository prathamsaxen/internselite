const express = require('express');
const app = express();
const connectDB = require('./config/db');
const router = require('./routes/TodosRouter');
const cors = require('cors');

connectDB();
app.use(cors("*"));
app.use(express.json());
app.use('/api/todos',router);
  app.get('/',(req,res)=>{
    res.send('Hello World');
  });
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})