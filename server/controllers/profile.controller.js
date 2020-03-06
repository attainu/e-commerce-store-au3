const Users = require("../models/Users");

module.exports = {
  async getProfileDetails(req, res) {
    const id = req.payload.id;
    let user = await Users.findOne({
      where: {
        user_id: id
      },
      raw: true
    });
    let { password, ...restObj } = user;
    res.send(restObj);
  },

  async updateProfileDetails(req, res) {
    const id = req.payload.id;
    // const {firstname,lastname,gender, email, mobile, address, password} = req.body
    const { firstname, lastname, gender, mobile, address, password } = req.body;
    if (password === undefined) {
      let user = await Users.update(
        {
          firstname,
          lastname,
          gender,
          mobile,
          address
        },
        {
          where: {
            user_id: id
          },
          returning: true
        }
      );
      res.send({ error: false, message: "Profile Updated Successfully" });
    } else {
      let user = await Users.update(
        {
          password
        },
        {
          where: {
            user_id: id
          },
          returning: true
        }
      );
      res.send({ error: false, message: "Password Changed Successfully" });
    }
  }
};
