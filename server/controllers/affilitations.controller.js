const Affiliations = require("../models/Affiliations");
const Users = require("../models/Users");

Affiliations.hasOne(Users, {
  foreignKey: "user_id"
});

module.exports = {
  addAffiliate(req, res) {
    Affiliations.findOne({
      where: {
        affiliate_name: req.body.affiliate_name
      }
    }).then(affiliate => {
      if (affiliate) {
        res.send({
          error: true,
          message: "Already exists..."
        });
      } else {
        const affiliate_name = req.body.affiliate_name;
        const user_id = req.body.user_id;
        let obj = { affiliate_name, revenue: 0, user_id };
        Affiliations.create(obj).then(() =>
          res.send({
            error: false,
            message: "Affiliation Key generated Successfully..."
          })
        );
      }
    });
  },

  getAffiliate(req, res) {
    const user_id = req.params.id;
    Affiliations.findOne({
      where: {
        user_id: user_id
      }
    }).then(affiliate => {
      if (affiliate)
        res.send({ isAffiliate: true, affiliate_details: affiliate.toJSON() });
      else res.send({ isAffiliate: false });
    });
  }
};
