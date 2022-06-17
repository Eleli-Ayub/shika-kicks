const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const CreateUser = require('./Routes/CreateUser')
const Loginuser = require('./Routes/Loginuser')
const app = express()

dotenv.config();
app.use(express.json())

//connect to mongo db

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("Connected to db");
})


//Use middlewares

app.use('/api', CreateUser)
app.use('/api', Loginuser)

app.listen(process.env.PORT || 4000, (error)=>{
    if (error) {
        console.log(error);
    }
    console.log("Server is running");
})