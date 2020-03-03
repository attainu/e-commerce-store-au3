const Wishlists = require("../models/Wishlists");
const Users = require("../models/Users");
const Products = require("../models/Products");

Users.hasOne(Wishlists, {
  foreignKey: "user_id"
});

module.exports = {
  addToWishlist(req, res) {
    let id = req.payload.id;
    console.log(req.body);
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
          console.log("dELETED Wishlist");
          console.log(c);
          if (req.body.wishlist_items.length > 0) {
            Wishlists.create({ ...req.body, user_id: id })
              .then(wishlist => {
                console.log(wishlist.dataValues);
              })
              .then(res.send("Inserted in Wishlist Successfully"));
          } else res.send("Wishlist is Empty!");
        });
      } else {
        if (req.body.wishlist_items.length > 0) {
          Wishlists.create({ ...req.body, user_id: id })
            .then(wishlist => {
              console.log(wishlist.dataValues);
            })
            .then(res.send("Inserted in Wishlist Successfully"));
        } else res.send("Wishlist is Empty!");
      }
    });
  },

  async getWishlist(req, res) {
    const id = req.payload.id;
    console.log(id, "user id consoled");
    let wishlistDetails = await Wishlists.findAll({
      where: { user_id: id },
      raw: true
    });
    console.log("===========================================");

    console.log(wishlistDetails, "wishlist details");
    console.log("===========================================");
    if (
      wishlistDetails === null ||
      wishlistDetails.length <= 0 ||
      wishlistDetails[0] === undefined ||
      wishlistDetails[0].wishlist_items.length <= 0
    )
      res.send([]);
    // console.log(wishlistDetails[0].wishlist_items);
    else {
      const productIDS = wishlistDetails[0].wishlist_items;

      let products = await Products.findAll({
        raw: true,
        where: { product_id: productIDS }
      });
      console.log(products);
      res.send(products);
    }
  }
};
