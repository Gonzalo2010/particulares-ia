let userController = {
    perfil : (req, res, next) => {
        res.render('users/perfil');
    },
    create : (req, res, next) =>{
      res.render("users/register");
    },
    store : (req, res, next) =>{
      res.render("users/register");
    }, 
    loginRender : (req, res, next) => {
      res.render('users/login');
    }  
}

module.exports = userController;