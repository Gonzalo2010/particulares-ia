var express = require('express');
var router = express.Router();

//Controller
let userController = require("../controllers/userControllers")

//Middlewares 
let userMiddleware = require("../middlewares/userMiddleware");                  //Middleware de Register

router.get('/perfil', userController.perfil);

router.get('/register', userController.create);

router.post('/register',
                userMiddleware,
                                userController.store);

router.get('/login', userController.loginRender);

router.post('/register', userController.loginIniciar);

module.exports = router;
