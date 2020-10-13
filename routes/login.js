var express = require('express');
const { validationResult } = require('express-validator');
var router = express.Router();
let loginController = require ('../controllers/loginController')
let validator = require('../middleWares/validator');

router.get('/', loginController.index);
router.post('/', validator.login,loginController.processLogin);

router.post('/logout', loginController.logout);
module.exports = router;