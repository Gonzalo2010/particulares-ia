var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('partials/recuadro');
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil');
});

router.get('/nav', function(req, res, next) {
  res.render('partials/nav');
});

router.get('/footer', function(req, res, next) {
  res.render('partials/footer');
});

router.get('/contactanos', function(req, res, next) {
  res.render('partials/contactanos');
});

router.get('/faq', function(req, res, next) {
  res.render('partials/faq');
});

module.exports = router;