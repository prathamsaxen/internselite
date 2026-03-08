console.log("Pratham Saxena");

const fs = require('fs')

fs.writeFileSync('hello.txt',
   'Hello World'
);

const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("Hello From Server");
    res.end();

})

server.listen(3000,()=>{
    console.log(
        "Server is running on port 3000"
    )
})