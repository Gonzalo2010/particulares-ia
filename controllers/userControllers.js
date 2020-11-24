const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

let usuariosJson = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), 'utf-8');
let dbDirectory = path.resolve(__dirname, '../database/usuarios.json')

usuariosJson == "" ?
    fs.writeFileSync(dbDirectory, JSON.stringify(usuariosJson = [])) :
    usuariosJson = JSON.parse(fs.readFileSync(dbDirectory), 'utf-8');

let userController = {
    perfil : (req, res, next) => {
        res.render('users/perfil');
    },
    create : (req, res, next) =>{
      res.render("users/register");
    },
    store : (req, res, next) =>{
      res.render("users/register");
<<<<<<< HEAD
    }, 
    loginRender : (req, res, next) => {
      res.render('users/login');
    }  
=======
      // ID maximo para reemplazar
      let idMax = 0;

      //For para buscar el ID mas alto, y reemplazar idMax por el ID mas alto
      for(let i = 0 ; i < usuariosJson.length ; i++){
        if(usuariosJson[i].id > idMax){
          idMax = usuariosJson[i].id;
        }
      }
    

      //Sumarle 1 al ID mas alto, para crear un producto nuevo
      idMax = idMax + 1;

      //Hacer objeto completo, con el ID primero para mas comodidad
      let usuarioNuevo = {
        id : idMax,
        nombre : req.body.nombre,
        email : req.body.email,
        contrasenia : bcrypt.hashSync(req.body.contrasenia,10),
        admin: false
      }

      //Sumar el usuario al array
      usuariosJson.push(usuarioNuevo);
      
      //Sobreescribe el archivo
      fs.writeFileSync(dbDirectory, JSON.stringify(usuariosJson));

      //Te envia a la vista una vez el form fue completado
      res.redirect("../");
    },
    loginRender : (req, res, next) => {
      res.render('users/login');
    },
    loginIniciar : (req, res, next) => {
      res.render('users/login');
    } 
>>>>>>> 84aff40456f2400906b5340b7db45178777ae01d
}

module.exports = userController;