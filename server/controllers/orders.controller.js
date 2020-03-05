const Orders = require("../models/Orders");
const Products = require("../models/Products");
const Users = require("../models/Users");
const Affiliations = require("../models/Affiliations");
Users.hasMany(Orders, {
  foreignKey: "user_id"
});

Affiliations.hasMany(Orders, {
  foreignKey: "affiliate_id"
});

module.exports = {
  async addOrder(req, res) {
    let { affiliate_name, ...restObj } = req.body;
    if (affiliate_name === "" || affiliate_name === null) {
      restObj["affiliate_id"] = null;
      Orders.create(restObj).then(() =>
        res.send({ error: false, message: "Order Placed Successfully" })
      );
    } else {
      let affiliate = await Affiliations.findOne({
        where: {
          affiliate_name: affiliate_name
        },
        raw: true
      });
      if (affiliate === null) {
        res.send({
          error: true,
          message: "No Such Affiliate Present"
        });
      } else {
        let affiliate_id = affiliate.affiliate_id;
        let current_revenue = Number(affiliate.revenue);
        let total_price = Number(req.body.total_price);
        let revenueToAffiliate = parseInt(total_price * 0.1);
        let total_revenue = current_revenue + revenueToAffiliate;
        let total_orders = Number(affiliate.total_orders) + 1;
        let orderDetails = [];
        let newObj = {};
        newObj["time"] = Date.now();
        newObj["amount"] = revenueToAffiliate;
        if (affiliate.order_details !== null) {
          orderDetails = affiliate.order_details;
          orderDetails.push(newObj);
        } else {
          orderDetails.push(newObj);
        }
        await Affiliations.update(
          {
            revenue: total_revenue,
            total_orders: total_orders,
            order_details: orderDetails
          },
          {
            where: {
              affiliate_id: affiliate_id
            }
          }
        );
        restObj["affiliate_id"] = affiliate_id;
        Orders.create(restObj).then(order => {
          res.send({ error: false, message: "Order Placed Successfully" });
        });
      }
    }
  },

  async getOrders(req, res) {
    let id = req.params.id;
    let orders = await Orders.findAll({
      where: {
        user_id: id
      },
      raw: true
    });
    let productIDS = [],
      set = new Set();
    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < orders[i].products.length; j++)
        set.add(orders[i].products[j].product_id);
    }
    productIDS = [...set];
    let products = await Products.findAll({
      raw: true,
      where: { product_id: productIDS }
    });

    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < orders[i].products.length; j++) {
        let pID = orders[i].products[j].product_id;
        let index = productIDS.indexOf(pID);
        let obj = { ...orders[i].products[j] };
        orders[i].products[j] = { ...obj, ...products[index] };
      }
    }
    res.json(orders);
  }
};
