const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    let token;
    let authHeader = req.header.Authorization || req.header.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split("")[1];

        if(!token){
            return res
            .status(401)
            .json({message: "No token, authorization denied"});
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            console.log("The decoded user is : ", req.user);
            next();
        }catch(err){
            res.status(400).json({message: "Token is not valid"});
        }
    } else{
        return res
            .status(401)
            .json({message: "No token, authorization denied"});
    }
};

module.exports = verifyToken;