const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController')
const path = require('path');
const { check } = require('express-validator');
//const guestMiddleware = require('../middleWares/guestMiddleware');

//const validator = require('../middleWares/validator');


/* GET users listing. */
router.get('/',registerController.index);
router.post('/', registerController.store);


module.exports = router;
