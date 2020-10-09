var express = require('express');
var router = express.Router();
let detallePeliController = require ('../controllers/detallePeliController');

router.get('/:id', detallePeliController.detail);
router.post('/delete/:id', detallePeliController.delete);

module.exports = router; 