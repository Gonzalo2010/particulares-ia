var express = require('express');
var router = express.Router();

//Controller
let userController = require("../controllers/userControllers")

//Middlewares 
let userMiddleware = require("../middlewares/userMiddleware");                  //Middleware de Register
let logUsersMiddleware = require('../middlewares/logUsersMiddleware');          //Middleware de usuarios registrados (LOG)
let authMiddleware = require('../middlewares/authMiddleware');                  //Middleware de usuario logueado
let loginMiddleware = require("../middlewares/loginMiddleware");                //Middleware de Login

router.get('/perfil', userController.perfil);

router.get('/register', userController.create);

router.post('/register',
                userMiddleware,
                logUsersMiddleware, 
                                userController.store);

router.get('/login',
                /* authMiddleware, */
                                userController.loginRender);

router.post('/login',
                loginMiddleware,
                                userController.loginIniciar);

module.exports = router;
