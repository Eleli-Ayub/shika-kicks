const mongoose = require('mongoose')

// Create schema for the product

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 2,
        max: 20,
    },
    description:{
        type: String,
        required: true,
        min: 20,
    },
    price: {
        type: Number,
        required: true,
        min: 2
    },
    sizes:{
        type: Array,
        required: true,
        min: 1,
        max: 10
    },
    gender:{
        type: String,
        required: true,
        min: 3
    },
    brand:{
        type: String,
        required: true,
        min: 3
    },
    colors: {
        type: Array,
        min: 1,
        required: true,
        max: 5
    },
    quantity:{
        type: Number,
    }
})

module.exports = mongoose.model("Product", productSchema)