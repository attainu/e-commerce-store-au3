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

  //   async getWishlist(req, res) {
  //     const id = req.payload.id;
  //     console.log(id, "user id consoled");
  //     let wishlistDetails = await Wishlists.findAll({
  //       where: { user_id: id },
  //       raw: true
  //     }).then(

  //     )
  //     console.log("===========================================");
  //     console.log(wishlistDetails, "wishlist details");
  //     console.log("===========================================");
  //     if (
  //       wishlistDetails === null ||
  //       wishlistDetails.length <= 0 ||
  //       wishlistDetails[0] === undefined ||
  //       wishlistDetails[0].wishlist_items.length <= 0
  //     )
  //       res.send([]);
  //     // console.log(wishlistDetails[0].wishlist_items);
  //     else {
  //       const productIDS = wishlistDetails[0].wishlist_items;

  //       let products = await Products.findAll({
  //         raw: true,
  //         where: { product_id: productIDS }
  //       });
  //       console.log(products);
  //       res.send(products);
  //     }
  //   }

  // getWishlist(req, res) {
  //   const id = req.payload.id;
  //   Wishlists.findOne({ where: { user_id: id } }).then(response => {
  //     if (response) {
  //       console.log(`
  //     response of first get  query table queried wishlists --------------------------------------------------`);
  //       console.log(response.dataValues);
  //       console.log(response.dataValues.wishlist_items);
  //       console.log(Array.isArray(response.dataValues.wishlist_items));
  //       let product_ids = response.dataValues.wishlist_items;
  //       Products.findAll({
  //         raw: true,
  //         where: { product_id: product_ids }
  //       }).then(e => {
  //         console.log(`
  //         response of second get  query table queried products =============================================`);
  //         console.log(e);
  //         res.send(e);
  //       });
  //     } else {
  //       res.send([]);
  //     }
  //   });
  // }

  async getWishlist(req, res) {
    const id = req.payload.id;
    console.log(id, "user id consoled");
    try {
      let wishlistDs = await Wishlists.findAll({
        raw: true
      });
      console.log("WISHLIST DS-----");
      console.log(wishlistDs);
      console.log("----------------\n");

      let wishlistDetails = await Wishlists.findAll({
        where: { user_id: id },
        raw: true
      });
      console.log("===========================================FIRST QUERY");
      // wishlistDetails = JSON.parse(wishlistDetails);
      console.log(wishlistDetails, "wishlist details");
      console.log("===========================================");
      if (wishlistDetails.length === 0) res.send([]);
      // console.log(wishlistDetails[0].wishlist_items);
      else {
        const productIDS = wishlistDetails[0].wishlist_items;
        console.log(
          "===========================================SECOND QUERY PRODUCT IDS"
        );
        console.log(productIDS);
        let products = await Products.findAll({
          raw: true,
          where: { product_id: productIDS }
        });
        console.log(products);
        res.send(products);
      }
    } catch (err) {
      console.log("ERROR---------------------------");
      console.log(err);
    }
  }
};
