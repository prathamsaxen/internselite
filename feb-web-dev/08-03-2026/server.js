const express = requrie('express')
const app = express();

app.get('/test',(req,res)=>{
    res.send("Server is Active");
})


app.listen(3000,()=>{
    console.log(
        "Server is running on port 3000"
    )
});