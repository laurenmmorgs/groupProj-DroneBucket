const DroneController = require('../controllers/drone.controller');
const multer = require('multer');
const express = require('express');
const UserController = require('../controllers/user.controller')

const {authenticate} = require('../config/jwt.config')
const upload = multer({ dest: 'uploads/' });


module.exports = (app) => {
    // app.get('/api', DroneController.index);
    app.get('/api/allPhotos', DroneController.findAllPhotos);
    app.get('/api/:id', DroneController.findOnePhoto);
    app.get('/api/user/photos', authenticate, DroneController.allPhotosByLoggedInUser);
    app.post('/api/newPhoto',  DroneController.createPhoto); 
    app.delete('/api/delete/:id', DroneController.deletePhoto);
    app.get('/api/currentUser', DroneController.getCurrentUser);

}

