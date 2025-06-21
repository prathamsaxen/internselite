// console.log("Pratham"); // INIT Part

// // What is Node JS?
// // Why Node JS?
// // How Node JS?

// // v8 Engine
// // Event Driven
// // Non Blocking IO
// // Single Threaded
// // Cross Platform
// // NPM

// API ENDPOINTS => Application Progarmming Interface
// 

// const http = require('http');

// const server=http.createServer((req,res)=>{
//     if(req.method==='GET' && req.url==='/')
//     {
//         res.end("Hello Pratham! Your Sever Is Up")
//     }
// })

// server.listen(3000,()=>{
//     console.log("Server Established at Port 3000");
// })

const express=require('express');
const app=express();

// Endpoints - URL at which your server will run a request and response cycle

app.get('/pratham',(req,res)=>{
    res.send("API ENDPOINT is Working Perfectly");
})

app.listen(4000,()=>{
    console.log("CONNECTION ESTABLISHED AT PORT 4000");
})

// Business Logic