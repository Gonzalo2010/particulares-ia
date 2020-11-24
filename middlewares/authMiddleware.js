let authMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado == undefined) {
        next();
    } else {
        res.redirect('/home');
    }
}

module.exports = authMiddleware;