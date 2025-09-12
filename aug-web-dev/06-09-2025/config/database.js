const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://erprathamsaxena_db_user:VBsyELrEon4Zd68i@cluster0.aotbqoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
            {
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
        )
        console.log("Database Connection is Established");
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;
// 1. Async Await
// 2. Try Catch