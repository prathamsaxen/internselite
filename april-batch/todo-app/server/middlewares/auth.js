const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    const authHeader=req.headers.authorization;
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