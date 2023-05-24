const mongoose = require('mongoose');
//This will create a database named  if one doesn't already exist (no need for mongo shell!):



                                             //! always change this from project to project
mongoose.connect("mongodb://127.0.0.1:27017/droneProj", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
