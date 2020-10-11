var express = require('express');
var router = express.Router();
let movieController = require ('../controllers/movieController');

router.get('/detail/:id', movieController.detail); //para detalle de una película

router.get('/create', movieController.add); //Para form de creación
router.post('/create', movieController.create); //Guarda la película nueva.

router.get('/edit/:id', movieController.edit); //Para form de edición.
router.post('/edit', movieController.update); //Guarda la película editada.

router.post('/delete/:id', movieController.delete); //Borra la plicula.

module.exports = router; 