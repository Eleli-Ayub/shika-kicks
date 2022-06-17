const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    lastName:{
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    email :{
        type: String,
        required: true,
        min: 5,
        max: 20,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        min: 10,
        max: 20,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("User", userSchema)