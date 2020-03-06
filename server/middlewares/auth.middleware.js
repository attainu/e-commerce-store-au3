let jwt = require('jsonwebtoken');
module.exports = { 
    verifyToken(req, res, next){
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token)
            return res.status(401).send('Access Blocked!');
        jwt.verify(token, process.env.TOKEN_SECRET, (error, payload)=>{
            if(error)
            return res.sendStatus(403);
            req.payload = payload;
            next();
        });
    }
}
