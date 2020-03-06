const Wishlists = require("../models/Wishlists");
const Users = require("../models/Users");
const Products = require("../models/Products");

Users.hasOne(Wishlists, {
  foreignKey: "user_id"
});

module.exports = {
  addToWishlist(req, res) {
    let id = req.payload.id;
    Wishlists.findOne({
      where: {
        user_id: id
      }
    }).then(user => {
      if (user) {
        Wishlists.destroy({
          where: {
            user_id: id
          }
        }).then(c => {
          if (req.body.wishlist_items.length > 0) {
            Wishlists.create({ ...req.body, user_id: id })
            .then(res.send("Inserted in Wishlist Successfully"));
          } else res.send("Wishlist is Empty!");
        });
      } else {
        if (req.body.wishlist_items.length > 0) {
          Wishlists.create({ ...req.body, user_id: id })
          .then(res.send("Inserted in Wishlist Successfully"));
        } else res.send("Wishlist is Empty!");
      }
    });
  },

  async getWishlist(req, res) {
    const id = req.payload.id;
    try {
      let wishlistDs = await Wishlists.findAll({
        raw: true
      });

      let wishlistDetails = await Wishlists.findAll({
        where: { user_id: id },
        raw: true
      });
      if (wishlistDetails.length === 0) res.send([]);
      else {
        const productIDS = wishlistDetails[0].wishlist_items;
        let products = await Products.findAll({
          raw: true,
          where: { product_id: productIDS }
        });
        res.send(products);
      }
    } catch (err) {
      console.log(err);
    }
  }
};
