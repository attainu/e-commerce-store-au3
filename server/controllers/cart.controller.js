const Cart = require('../models/Cart');
const Users = require('../models/Users');
const Products = require('../models/Products');

Cart.hasMany( Users, {
    foreignKey: 'user_id'
});

module.exports = {
    addToCart(req, res){
        Cart.findOne({
            where:{
                user_id:req.body.user_id,
            }
        }).then(user=>{
            if(user){
                Cart.destroy({
                    where:{
                        user_id: req.body.user_id
                    }                     
                }).then((c)=>{
                    console.log("dELETED CART");
                    console.log(c);
                    Cart.create(req.body).then((cart)=>{
                        console.log(cart.dataValues);
                    }).then(res.send("Inserted in Cart Successfully"));            
                });
            }
            else{
                Cart.create(req.body).then((cart)=>{
                    console.log(cart.dataValues);
                }).then(res.send("Inserted in Cart Successfully"));            
            }
        })
    },

    async getCartDetailsByUserId(req, res){
        const cartValues = await Cart.findOne({where:{user_id:req.params.id}});
        const cartDetails = cartValues.dataValues;
        const prodIDS = cartDetails.cart_items.map( item=>{
            return item.product_id;
        });
        const quantities = cartDetails.cart_items.map( item=>{
            return item.qty;
        });

        const arrayOfObjects =[];
        const len = prodIDS.length
        for(let i=0;i<len;i++){
            let product = await Products.findOne({where:{product_id: prodIDS[i]}})
            let obj = product.dataValues;
            obj["qty"] = quantities[i];
            arrayOfObjects.push(obj);
        }
        // res.send("hi");
        res.send(arrayOfObjects);            
    }

    // async getCartDetailsByUserId(req, res){
    //     Cart.findOne({
    //         where:{
    //             user_id:req.params.id
    //         }
    //     }).then( async (cartDetails) => {
    //         const prodIDS = cartDetails.cart_items.map( item=>{
    //             return item.product_id;
    //         });
    //         const qauntities = cartDetails.cart_items.map( item=>{
    //             return item.qty;
    //         });
    //         const arrayOfObjects =[];
    //         const len = prodIDS.length
    //         for(let i=0;i<len;i++){
    //            await Products.findOne({
    //                 where:{
    //                     product_id: prodIDS[i]
    //                 }
    //             }).then((product)=>{
    //                 const obj = product.dataValues;s
    //                 obj["qty"] = qauntities[i];
    //                 arrayOfObjects.push(obj);
    //             })
    //         }
    //         res.send(arrayOfObjects);            
    //     });
    // }
}