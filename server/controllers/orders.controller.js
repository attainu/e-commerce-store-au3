const Orders = require('../models/Orders');
const Products = require('../models/Products');
const Users = require('../models/Users');
const Affiliations = require('../models/Affiliations');
Users.hasMany(Orders,{
    foreignKey: "user_id"
});

Affiliations.hasMany(Orders,{
    foreignKey: "affiliate_id"
});

module.exports = {
    async addOrder(req, res){
       let {affiliate_name, ...restObj} = req.body; 
       let affiliate = await Affiliations.findOne({
           where:{
               affiliate_name: affiliate_name
           },
           raw: true           
       });  
       if(!affiliate)
           res.send('No such Affiliate Present!');
        let affiliate_id = affiliate.affiliate_id;
        restObj["affiliate_id"] = affiliate_id;
        Orders.create(restObj)
        .then(()=>res.send("Order Successful!"));
    },    

    async getOrders(req, res){
        let id = req.params.id;
        let orders = await Orders.findAll({
            where:{
                user_id : id
            },
            raw:true
        });
        let productIDS = [], set = new Set();
        for(let i=0;i<orders.length;i++){
            for(let j=0;j<orders[i].products.length;j++)
                set.add(orders[i].products[j].product_id);
        }
        productIDS = [...set];
        let products = await Products.findAll({
            raw: true,
            where: { product_id: productIDS }
        });

        for(let i=0;i<orders.length;i++){
            for(let j=0;j<orders[i].products.length;j++){
                let pID = orders[i].products[j].product_id;
                let index = productIDS.indexOf(pID);
                let obj = {...orders[i].products[j]};
                orders[i].products[j] = {...obj,...products[index]}
            }
        }
        res.json(orders);
    }
}