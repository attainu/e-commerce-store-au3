const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlist.controller');

router.post('/', wishlistController.addToWishlist);
router.get('/get', wishlistController.getWishlist);

module.exports = router;