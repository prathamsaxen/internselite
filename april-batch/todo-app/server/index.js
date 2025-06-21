const express = require('express');
const cors = require('cors'); // <-- import cors
const app = express();
const db = require('./config/db');
const todoRoutes = require('./routes/todo');
const authRoutes = require('./routes/auth');
const authMiddleWare=require('./middlewares/auth');

db();

// Enable CORS for all origins
app.use(cors());

app.use(express.json());

app.use('/api/todos',authMiddleWare, todoRoutes);
// app.use(authMiddleWare());
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log("Server Established at Port 3000");
});
