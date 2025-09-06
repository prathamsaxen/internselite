const express = require('express');
const app = express();

app.get('/test',(req,res)=>{
    res.send("Server is Healthy");
})

app.listen(8000,()=>{
    console.log(`Server Is Established over PORT number = 8000`);
})

// nodemon?