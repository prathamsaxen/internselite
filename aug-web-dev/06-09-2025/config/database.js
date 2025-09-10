const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect('',
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