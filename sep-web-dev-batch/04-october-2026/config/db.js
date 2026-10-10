const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://erprathamsaxena_db_user:28Ql0cpcVXRNIjpC@cluster0.6mtkps3.mongodb.net/?appName=Cluster0");
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
// MONGO DB URI
