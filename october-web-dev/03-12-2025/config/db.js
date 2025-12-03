const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://erprathamsaxena_db_user:TVtIXcIS9UZthlje@cluster0.aotbqoj.mongodb.net/?appName=Cluster0');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;