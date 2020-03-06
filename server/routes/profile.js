const router = require('express').Router();
const profileController = require('../controllers/profile.controller');

router.get('/',profileController.getProfileDetails);
router.put('/', profileController.updateProfileDetails);

module.exports = router;
