const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(()=> console.log("Mongodb connected"))
const blogs = require('./routes/blogs')


const PORT = process.env.PORT;
app.use(express.json())
app.use('/blogs',blogs);

app.get('/',(req,res) =>{
    res.redirect('/blogs');
})


app.listen(PORT,()=>{
    console.log("Server Started");
})