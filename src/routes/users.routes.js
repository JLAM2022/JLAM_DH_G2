const express = require('express');
const routes = express.Router();
const usersController = require('../controller/usersController');
const upload = require('../middleware/multerMidUsers')
const adminMid = require('../middleware/adminMiddleware');
const guestMid = require('../middleware/guestMiddleware');
const userLogg = require('../middleware/userLoggedMiddleware');


routes.get('/edit-user/:id', usersController.userData);
routes.put('/edit-user', usersController.userEdit);
routes.get('/login', guestMid, usersController.login);
routes.post('/login', [guestMid, userLogg], usersController.processLogin);
routes.get('/register', usersController.registerView);
routes.post('/register', [upload, guestMid], usersController.register)

routes.get('/all-users', adminMid,usersController.cargarUsuarios);
routes.get('/admin', adminMid, usersController.admin);



module.exports = routes;