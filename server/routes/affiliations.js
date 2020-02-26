const router = require('express').Router();
const affiliationsController = require('../controllers/affilitations.controller');

router.post('/',  affiliationsController.addAffiliate);
router.get('/:id', affiliationsController.getAffiliate);
module.exports = router;