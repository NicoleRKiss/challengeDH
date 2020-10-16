const express = require('express');
const router = express.Router();
const path = require("path");

const registerController = require('../controllers/registerController');

const validator = require('../middlewares/validator');


router.get('/', registerController.register);
router.post("/", validator.register, registerController.processRegister);
router.get("/login", registerController.login);
router.post("/login", validator.login, registerController.processLogin);
router.post('/logout', registerController.logout);


module.exports = router;