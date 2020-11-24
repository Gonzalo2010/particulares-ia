var express = require('express');
var router = express.Router();
let userController = require("../controllers/userControllers")

router.get('/perfil', userController.perfil);

router.get('/register', userController.create);

router.get('/login', userController.loginRender);

module.exports = router;
