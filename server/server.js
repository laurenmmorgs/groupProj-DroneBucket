const express = require('express');
const cors = require('cors');
const app = express();

const fs = require('fs');
const path = require('path');





require("./config/mongoose.config");
require('dotenv').config();
const cookieParser = require('cookie-parser')
app.use(express.json(), express.urlencoded({ extended: true }));
require('dotenv').config();
app.use(cors({credentials:true, origin:'http://localhost:3000'}));

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser())


app.listen(8000, () => console.log("The server is all fired up on port 8000"));


require('./config/mongoose.config');
require('./routes/drone.routes')(app);


const UserRoutes = require('./routes/user.routes')
UserRoutes(app)

//grabs the uploads folder and stores the images to this folder 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

