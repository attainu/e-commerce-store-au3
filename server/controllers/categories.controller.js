const Categories = require('../models/Categories');
const Products = require("../models/Products");

Categories.hasMany(Products, {
    foreignKey: 'category_id'
});
  
module.exports = {
    async getAllCategories(req,res) {
        await Categories.findAll({
            attributes: ['category_id', 'category_name'],
            include: [{
              model: Products,
              required: true,
              attributes:[]
             }]
          }).then( cat => {
            res.send(cat);
        });
    }
}