let mainController = {
    index : function(req, res, next) {
        res.render('index', { title: 'Express' });
      },
    faq : function(req, res, next) {
        res.render('partials/faq');
      },
    contactanos : function(req, res, next) {
        res.render('partials/contactanos');
      }

}

module.exports = mainController;