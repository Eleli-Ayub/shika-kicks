const router = require('express').Router()
const Product = require('../models/Product')


//get input data to edit the product

router.post('/edit-product', async(req, res)=>{
    const data = req.body

    //verify if product exist before edit
    const productExist = await Product.findOne({name: data.name})
    if(!productExist) return res.status(301).send(`Product does not exist`)
    

    //edit product if it exists

    try{
    const product = await productExist.updateOne({
        name: data.name,
        description: data.description,
        price: data.price,
        sizes: data.sizes,
        colors: data.colors,
        quantity: data.quantities
    })
    res.status(200).send(`Product successfully uploaded ${product}`)
    }catch(error){
        res.status(400).send('Product not update' + error)
    }


    //save data to database
    // try {
    //     const newProduct = await product.updateOne()
    //     console.log('Product was updated');
    //     res.status(200).send(newProduct)
        
    // } catch (error) {
    //     res.status(400).send("Product was not updated \n" + error)
    //     console.log(error); 
    // }
})

module.exports = router