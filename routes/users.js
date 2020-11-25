var express = require('express');
var router = express.Router();

//Controller
let userController = require("../controllers/userControllers")

//Middlewares 
let userMiddleware = require("../middlewares/userMiddleware");                  //Middleware de Register
let loginMiddleware = require("../middlewares/loginMiddleware");                //Middleware de Login
let logUsersMiddleware = require('../middlewares/logUsersMiddleware');          //Middleware de usuarios registrados (LOG)
let authMiddleware = require('../middlewares/authMiddleware');                  //Middleware de usuario logueado
let perfilOrAdminMiddleware = require("../middlewares/perfilOrAdminMiddleware");//Middleware de administradores
let guestMiddleware = require('../middlewares/guestMiddleware');                //Middleware de invitado, sin usuario

router.get('/perfil/:id',
                guestMiddleware, 
                perfilOrAdminMiddleware,
                                userController.perfil);

router.get('/register', userController.create);

router.post('/register',
                userMiddleware,
                logUsersMiddleware, 
                                userController.store);

router.get('/login',
                authMiddleware,
                                userController.loginRender);

router.post('/login',
                loginMiddleware,
                                userController.loginIniciar);

module.exports = router;
