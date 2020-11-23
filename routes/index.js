var express = require('express');
var router = express.Router();
let mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.index);

router.get('/home', function(req, res, next) {
  res.render('partials/recuadro');
});

router.get('/contactanos', mainController.contactanos);

router.get('/faq', mainController.faq);

module.exports = router;