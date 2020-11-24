var express = require('express');
var router = express.Router();
let userController = require("../controllers/userControllers")

router.get('/perfil', userController.perfil);

router.get('/register', userController.create);

router.post('/register', userController.store);

router.get('/login', userController.loginRender);

router.post('/register', userController.loginIniciar);

module.exports = router;
