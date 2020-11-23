var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil');
});

router.get('/contactanos', function(req, res, next) {
  res.render('contactanos');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/faq', function(req, res, next) {
  res.render('faq');
});

router.get('/recuadro', function(req, res, next) {
  res.render('partials/recuadro');
});

module.exports = router;