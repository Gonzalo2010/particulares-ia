let mainController = {
    index : function(req, res, next) {
        res.render('index', { title: 'Express' });
      },
    faq : function(req, res, next) {
        res.render('faq');
      },
    contactanos : function(req, res, next) {
        res.render('contactanos');
      },
    home : function(req, res, next) {
        res.render('home');
  }
}

module.exports = mainController;