require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors("*"));
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

app.use('/api/todos', todoRoutes);
const PORT = process.env.PORT || 3000;
connectDB();

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});