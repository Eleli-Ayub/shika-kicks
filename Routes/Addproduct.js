const router = require('express').Router()
const Product = require('../models/Product')


//get input data to save to database

router.post('/add-product', async(req, res)=>{
    const data = req.body

    //verify if product exist before adding to avoid duplicated
    const productExist = await Product.findOne({name: data.name})
    if(productExist) return res.status(301).send(`Product already exist ${productExist}`)
    

    //add product if it does not exist
    const product = new Product({
        name: data.name,
        description: data.description,
        price: data.price,
        sizes: data.sizes,
        gender: data.gender,
        brand: data.brand,
        colors: data.colors,
        quantity: data.quantities
    })


    //save data to database
    try {
        const newProduct = await product.save()
        console.log('Product added');
        res.status(200).send(newProduct)
        
    } catch (error) {
        res.status(400).send("Product was not added")
        console.log(error);
    }
})

module.exports = router