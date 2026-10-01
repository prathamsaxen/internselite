// // const http = require("http");
// // // Why instead of import we use http.
// // // console.log("JavaScript is Running!! and Node is Running!!");  

// // const server = http.createServer((request,response)=>{
// //     response.writeHead(200,{"Content-Type":"text/html"});
// //     response.end("Hello from the server!");
// // });

// // server.listen(3000,()=>{
// //     console.log("Server is running on port 3000");
// // })

// const express = require("express");
// const app = express();


// app.get("/",(req,res)=>{
//     console.log(req);
//     console.log("Hello from the server!");
//     res.send("Hello from the server!");
// })

// app.get("/api/students",(req,res)=>{
//     res.send([
//         {id:1,name:"John",age:20},
//         {id:2,name:"Jane",age:21},
//         {id:3,name:"Jim",age:22},
//         {id:4,name:"Jill",age:23},
//         {id:5,name:"Jack",age:24},
//         {id:6,name:"Jill",age:25},
//         {id:7,name:"Jill",age:26},
//         {id:8,name:"Jill",age:27},
//         {id:9,name:"Jill",age:28},
//         {id:10,name:"Jill",age:29},
//     ])
// })
// app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// })

const express = require("express");
const app = express();
app.use(express.json());

let students = [
    { id: 1, name: "John", age: 20, course: "React" },
    { id: 2, name: "Jane", age: 21, course: "Node" },
    { id: 3, name: "Jim", age: 22, course: "MongoDB" },
    { id: 4, name: "Jill", age: 23, course: "MySQL" },
    { id: 5, name: "Jack", age: 24, course: "PostgreSQL" },
    { id: 6, name: "Jill", age: 25, course: "Redis" },
    { id: 7, name: "Jill", age: 26, course: "Elasticsearch" },
]

let nextId = 8;

app.get("/", (req, res) => {
    res.send("Health Check Call!");
})

app.get("/api/students", (req, res) => {
   res.status(200).json(students);
})

app.get("/api/students/:id", (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
})

app.post("/api/students", (req, res) => {
    const newStudent = { id: nextId++, ...req.body };
    students.push(newStudent);
    res.status(201).json(newStudent);
})

app.delete("/api/students/:id", (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    students = students.filter(student => student.id !== parseInt(req.params.id));
    res.status(200).json({ message: "Student deleted successfully" });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})