const path = require('path');
const fs = require('fs');

let archivoUsuarios = fs.readFileSync(path.join(__dirname, '../models/data/users.json'), { encoding: 'utf-8' });
let usuarios = JSON.parse(archivoUsuarios);

const usersController = {

    login: (req, res) =>{
        res.render(path.join(__dirname, '../views/users/login.ejs'))
    },

    admin: (req, res) =>{
        res.render(path.join(__dirname, '../views/adminArea.ejs'))
    },

    register: (req,res) =>{

        //genero una id segun tamaño de array
        let generadorId = usuarios.length

        //Asigno datos del body al objeto a insertar a la base de datos    
        let formDataUser = {
            id: generadorId,
            nombre: req.body.nombre,
            email: req.body.email,
            fechaNac: req.body.fechaNacimiento,
            password: req.body.password,
        }

        //Isercion de objeto a la base de datos
        usuarios.push(formDataUser);
        let newDataUsers = JSON.stringify(usuarios);
        fs.writeFileSync(path.join(__dirname,'../models/data/users.json'), newDataUsers);

        //Redireccion al home luego del registro
        res.redirect('/')
    },


}

module.exports = usersController;