const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    console.log("CALLED");
    const authHeader=req.headers.authorization;
    console.log(authHeader);
    if(!authHeader) return res.status(401).json({error:"No Token Found"});
    const token=authHeader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,"TEMP_SECRET");
        req.userId=decoded.userId;
        next();
    }
    catch(err)
    {
        res.status(401).json({error:"Invalid Token"});
    }
}