const router = require('express').Router()
const Product = require('../models/Product')


//get input data to save to database

router.post('/delete-product', async(req, res)=>{
    const data = req.body

    //verify if product exist before deleting to avoid duplicated
    const product = await Product.findOne({name: data.name})
    if(!product) return res.status(301).send(`Product does not exist`)


    //save data to database
    try {
        const deleteProduct = await product.deleteOne()
        console.log('Product Deleted');
        res.status(200).send(`Product was deleted \n ${deleteProduct}`)
        
    } catch (error) {
        res.status(400).send("Product was not deleted")
        console.log(error);
    }
})

module.exports = router