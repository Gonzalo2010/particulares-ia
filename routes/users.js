var express = require('express');
var router = express.Router();
let userController = require("../controllers/userControllers")

router.get('/perfil', userController.perfil );

module.exports = router;
