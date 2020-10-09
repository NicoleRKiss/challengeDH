const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController')
const path = require('path');
const { check } = require('express-validator');
const guestMiddleware = require('../middleWares/guestMiddleware');
const validator = require('../middleWares/validator');



/* GET users listing. */
router.get('/',guestMiddleware,registerController.index);
router.post('/',validator.register, registerController.create);


module.exports = router;
