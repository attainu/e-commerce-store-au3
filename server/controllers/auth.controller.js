const User = require('../models/Users');

module.exports = {
    signup(req, res) {
        User.create(req.body).then((insertedQuery)=>{
            // console.log("Inserted Query");
            // console.log(insertedQuery.dataValues);
        }).then(res.send("Inserted User Successfully"));       
    },

    signin(req, res){
        User.findOne({
            where: {
                email: req.body.email,
            }
        }).then( (user) => {
            if(!user)
                return res.status(404).send({message:"User NOT FOUND!"});
            let password = req.body.password;
            if(user.password!==password){
                return res.status(404).send({
                    message:"Passwords is Incorrect!",
                    accessToken: null
                });
            }
            const jwt = require('jsonwebtoken');
            const token = jwt.sign({id: user.user_id, name:user.firstname}, process.env.TOKEN_SECRET);
            res.json({message:"Successfully Signed In!", token});
        });        
    }
}