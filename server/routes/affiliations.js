const router = require('express').Router();
const affiliationsController = require('../controllers/affilitations.controller');

router.post('/',  affiliationsController.addAffiliate);
router.get('/:id', affiliationsController.getAffiliate);
router.get('/search/:name', affiliationsController.searchAffiliate);

module.exports = router;