var express = require('express');
var router = express.Router();
const usuariosController = require("../controllers/usuariosController")


/* GET home page. */
router.get('/', usuariosController.read)
router.post('/', usuariosController.create)
router.delete('/:id', usuariosController.delete)
router.put('/:id', usuariosController.update)

module.exports = router;
