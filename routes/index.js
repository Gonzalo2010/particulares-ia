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

module.exports = router;