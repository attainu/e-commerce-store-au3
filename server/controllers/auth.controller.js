const User = require("../models/Users");

module.exports = {
  signup(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user)
        res.send({ error: true, message: "Email already registered !" });
      else {
        User.create(req.body)
          .then(insertedQuery => {
            console.log("Inserted Query");
            console.log(insertedQuery.dataValues);
          })
          .then(res.send({ error: false, message: "Successfully registered" }));
        //we should send user in this res to auto login
      }
    });
  },

  signin(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(async user => {
      console.log(user);
      if (!user)
        return res
          .status(404)
          .send({ error: true, message: "Wrong username or password" });
      let password = req.body.password;
      if(!await user.validPassword(password)){
        return res.status(404).send({
          error: true,
          message: "Wrong username or password"
        });
      }
      else {
        const { user_id, firstname, lastname, email, mobile, address, gender } = user;
        const jwt = require("jsonwebtoken");
        const token = jwt.sign(
          { id: user_id, name: firstname },
          process.env.TOKEN_SECRET
        );
        let data = {
          success: true,
          message: "Successfully Signed In!",
          token,
          user_id,
          firstname,
          lastname,
          email,
          gender,
          mobile,
          address,
        };
        res.json(data);
      }
    });
  }
};
