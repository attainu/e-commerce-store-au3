const router = require('express').Router();
const cartController = require('../controllers/cart.controller');

router.post('/', cartController.addToCart);
router.get('/:id', cartController.getCartDetailsByUserId);
module.exports = router;