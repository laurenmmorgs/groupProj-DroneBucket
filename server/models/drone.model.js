const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Please enter a title"]
    },
    description: {
      type: String, 
      required: [true, "Please enter a description"]
    },
    imageUploaded: {
      type: String, 
      required:true 
    }
}, { timestamps: true });
module.exports = mongoose.model('Drone', droneSchema);


