const express = require("express");
const connectDB = require("./config/db");
const Student = require("./models/studentSchema");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/students", async (req, res) => {

    try {
        const { name, course, age } = req.body;

        if (!name || !course || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const student = await Student.create({ name, course, age });
        res.status(201).json({ message: "Student created successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
})

app.get("/api/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ students });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
})

app.put('/api/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, course, age } = req.body;
        const student = await Student.findByIdAndUpdate(id, { name, course, age }, { new: true });
        res.status(200).json({ message: "Student updated successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

app.delete('/api/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        res.status(200).json({ message: "Student deleted successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

