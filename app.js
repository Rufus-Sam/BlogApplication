const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(()=> console.log("Mongodb connected"))

const PORT = process.env.PORT;
app.use(express.json())

app.listen(PORT,()=>{
    console.log("Server Started");
})