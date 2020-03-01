const Cart = require("../models/Cart");
const Users = require("../models/Users");
const Products = require("../models/Products");

// Cart.hasMany(Users, {
//     foreignKey: "user_id"
// });

Users.hasOne(Cart, {
    foreignKey: "user_id"
});

module.exports = {
    addToCart(req, res) {
        Cart.findOne({
            where: {
                user_id: req.body.user_id
            }
        }).then(user => {
            if (user) {
                Cart.destroy({
                    where: {
                        user_id: req.body.user_id
                    }
                }).then(c => {
                    console.log("dELETED CART");
                    console.log(c);
                    if(req.body.cart_items.length>0){
                        Cart.create(req.body)
                            .then(cart => {
                                console.log(cart.dataValues);
                            })
                            .then(res.send("Inserted in Cart Successfully"));
                    }
                    else
                        res.send("Cart is Empty!");
                });
            } 
            else {
                if(req.body.cart_items.length>0){
                    Cart.create(req.body)
                        .then(cart => {
                            console.log(cart.dataValues);
                        })
                        .then(res.send("Inserted in Cart Successfully"));
                }
                else
                    res.send("Cart is Empty!");

            }
        });
    },

    //Fastest Way of Querying
    async getCartDetailsByUserId(req, res) {
        const cartValues = await Cart.findOne({
            where: { user_id: req.params.id }
        });
        const cartDetails = cartValues.dataValues;
        if(cartDetails===null)
            res.send([]);
        const quantities = [];
        const productIDS = cartDetails.cart_items.map(item => {
            quantities.push(item.qty);
            return item.product_id;
        });
        let products = await Products.findAll({
            raw: true,
            where: { product_id: productIDS }
        });
        let arrayOfObjects = [];
        products.forEach((item, index) => {
            let obj = { ...item };
            obj["qty"] = quantities[index];
            arrayOfObjects.push(obj);
        });
        res.send(arrayOfObjects);
    }
};