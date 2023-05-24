const { model } = require('mongoose');
const Photo = require('../models/drone.model');    /* this is new */
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const multer = require('multer');
const fs = require('fs');

    ///this sets the storage folder inside the client public folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
//making sure that they are the correct type of file 
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG and PNG are allowed!'), false);
    }
};
//ensures that the upload is uploaded to storage with file sizes
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB
    },
    fileFilter: fileFilter
});

module.exports = upload;

    // Get All
module.exports.findAllPhotos = (req, res) => {
        Photo.find()
            .then((allPhotos) => {
                res.status(200).json({ photos: allPhotos })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

    
    // Logged in User Only
// Logged in User Only
module.exports.allPhotosByLoggedInUser = async (req, res) => {
    try {
      const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });
      console.log('DECODED JWT id', decodedJwt.payload._id);
      const user_id = decodedJwt.payload._id;
      const photos = await Photo.find({ user_id: user_id });
      const user = await User.find({_id: user_id})
      res.status(200).json(photos);
    } catch (err) {
      res.status(400).json(err);
    }
  };



//creates a photo 
module.exports.createPhoto = (request, response) => {
  upload.single('imageUploaded')(request, response, (err) => {
      if (err) {
          return response.status(400).json({ error: err.message });
      }
      
      console.log(request.file)

      // console.log(request.body)
      const newPhoto = new Photo({
        title: request.body.title,
        description: request.body.description,
        imageUploaded: request.file ? request.file.path : null
      });;

      newPhoto.save()
          .then((photo) => {
              response.status(201).json({ photo });
          })
          .catch((error) => {
              response.status(400).json({ error });
          });
  });
};




module.exports.getCurrentUser = async (req, res) => {
  try {
    const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });
    console.log('DECODED JWT id', decodedJwt.payload._id);
    const user_id = decodedJwt.payload._id;
    const photos = await Photo.find({ user_id: user_id });
    const user = await User.find({_id: user_id})
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}


//deletes photo
  module.exports.deletePhoto = (request, response) => {
    Photo.deleteOne({_id: request.params.id})
        .then(deleteOnePhoto => response.json(deleteOnePhoto))
        .catch(err => response.json(err))

}


module.exports.findOnePhoto = (req, res) => {
  Photo.findOne({_id: req.params.id})
      .then((onePhoto) => {
          res.json({ photo: onePhoto })  // whatever we name it gets called to the front end 
      })
      .catch((err) => {
          res.json({ message: 'Something went wrong', error: err })
      });
}