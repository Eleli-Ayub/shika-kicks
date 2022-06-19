const router = require('express').Router()
const Product = require('../models/Product')

router.get('/view-products', async (req, res)=>{

    // const allProducts = await Product.find({})
    // res.status(200).send(allProducts)

    const allProducts = await Product.find({price: req.body.price})
    res.status(200).send(allProducts)
       
})
module.exports = router