var express = require('express');
var router = express.Router();
let crudPeliculasController = require ('../controllers/crudPeliculasController');

router.get('/', crudPeliculasController.add);
router.post('/update', crudPeliculasController.create);




module.exports = router; 