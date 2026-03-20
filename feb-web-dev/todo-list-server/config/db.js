const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://erprathamsaxena_db_user:hr26iB9OFzjXvHCM@cluster0.qcgnw7h.mongodb.net/?appName=Cluster0");
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;