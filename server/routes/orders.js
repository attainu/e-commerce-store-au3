const router = require('express').Router();
const ordersController = require('../controllers/orders.controller');

router.post('/', ordersController.addOrder);
router.get('/:id', ordersController.getOrders);
module.exports = router;