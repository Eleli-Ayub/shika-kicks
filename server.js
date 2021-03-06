const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const CreateUser = require('./Routes/CreateUser')
const Loginuser = require('./Routes/Loginuser')
const Addproduct = require('./Routes/Addproduct')
const Editproduct = require('./Routes/Editproduct')
const Deleteproduct = require('./Routes/Deleteproduct')
const Products = require('./Routes/Viewproducts')
const app = express()
const cors = require('cors')

dotenv.config();
app.use(express.json())
app.use(cors())

//connect to mongo db

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("Connected to db");
})


//Use middlewares

app.use('/api', CreateUser)
app.use('/api', Loginuser)
app.use('/api/product', Addproduct)
app.use('/api/product', Deleteproduct)
app.use('/api/product', Editproduct)
app.use('/api/client/products', Products)

app.listen(process.env.PORT || 4000, (error)=>{
    if (error) {
        console.log(error);
    }
    console.log("Server is running");
})