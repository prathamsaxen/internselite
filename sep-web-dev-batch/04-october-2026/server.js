const express = require("express");
const connectDB = require("./config/db");
const Student = require("./models/studentSchema");
const User = require("./models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "259103d8-d70c-463f-871c-53ce12cb85b6";


const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post("/api/students", async (req, res) => {

    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
        return res.status(401).json({ message: "Unauthorized" });
    }
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
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const students = await Student.find();
        res.status(200).json({ students });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
})

app.put('/api/students/:id', async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
        return res.status(401).json({ message: "Unauthorized" });
    }    try {
        const { id } = req.params;
        const { name, course, age } = req.body;
        const student = await Student.findByIdAndUpdate(id, { name, course, age }, { new: true });
        res.status(200).json({ message: "Student updated successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

app.delete('/api/students/:id', async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
        return res.status(401).json({ message: "Unauthorized" });
    }    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        res.status(200).json({ message: "Student deleted successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

app.post("/api/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: "User created successfully",  user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
})

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign({ userId: user._id, userName: user.name,userEmail: user.email }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

