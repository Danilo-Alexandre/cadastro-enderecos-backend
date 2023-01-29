var express = require('express');
var router = express.Router();
const enderecosController = require("../controllers/enderecosController")


/* GET home page. */
router.get('/', enderecosController.read)
router.post('/', enderecosController.create)
router.delete('/:id', enderecosController.delete)
router.put('/:id', enderecosController.update)

module.exports = router;
