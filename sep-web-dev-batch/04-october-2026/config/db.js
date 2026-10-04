const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("PASTE_YOUR_ENV_HERE");
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
// MONGO DB URI
