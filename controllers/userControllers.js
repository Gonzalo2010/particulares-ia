let userController = {
    perfil : function(req, res, next) {
        res.render('users/perfil');
    },
    create : (req, res, next) =>{
      res.render("users/register");
    },
    store : (req, res, next) =>{
      res.render("users/register");
    }
}

module.exports = userController;