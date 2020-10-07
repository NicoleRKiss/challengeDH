var express = require('express');
var router = express.Router();
let editarPeliculasController = require('../controllers/editarPeliculasController')

/* GET users listing. */

router.get('/edit/:id', editarPeliculasController.edit);
router.post('/edit/:id', editarPeliculasController.update);

module.exports = router;