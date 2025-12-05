const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://erprathamsaxena_db_user:sJSjORjNnu7JEsXR@cluster0.8maikqd.mongodb.net/?appName=Cluster0');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;