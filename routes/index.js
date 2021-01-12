var express = require('express');
var router = express.Router();
let mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.index);

router.get('/home', mainController.home);

router.get('/contactanos', mainController.contactanos);

router.get('/faq', mainController.faq);

router.get('/contactalo', mainController.contactalo);

module.exports = router;