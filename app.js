//to store secret keys
const dotenv = require('dotenv');
dotenv.config()

//start express 
// backend , frontend server using cors
const express = require('express');
const backend = express();
const frontend = express();
const cors = require('cors')
backend.use(cors());
frontend.use(cors());
// database connect
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongodb connected"))
//import needed files
const blogs = require('./backendroutes/blogs')

backend.use(express.json());
backend.use('/blogs', blogs);
backend.get('/', (req, res) => {
    res.redirect('/blogs');
})
frontend.use(express.static('public'))
frontend.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


frontend.listen(process.env.FRONT_PORT, () => {
    console.log("Frontend started");
})

backend.listen(process.env.BACKEND_PORT, () => {
    console.log("Backend started");
})