const router = require('express').Router()
const Product = require('../models/Product')

router.get('/view-products', async (req, res)=>{

    Product.find({},(error, result)=>{
        if(error){
            res.send(error)
        }else{
            res.send(result)
        }
    })
       
})
module.exports = router