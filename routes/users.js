var express = require('express');
var router = express.Router();
let userController = require("../controllers/userControllers")

router.get('/perfil', userController.perfil);

router.get('/register', userController.create);

<<<<<<< HEAD
router.get('/login', userController.loginRender);
=======
router.post('/register', userController.store);

router.get('/login', userController.loginRender);

router.post('/register', userController.loginIniciar);
>>>>>>> 84aff40456f2400906b5340b7db45178777ae01d

module.exports = router;
