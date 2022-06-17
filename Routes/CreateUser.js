const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {validateRegister} = require('../models/validation')


router.post('/sign-up', async (req, res)=>{

    //validate user data before registering

    const {error} = validateRegister(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //encrypt password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //create user object and save
    const user = new User({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        password: hashedPassword,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location,

    })
    try {
        const newUser = await user.save()
        res.status(200).send(newUser)
        
    } catch (error) {
        res.status(400).send(error)
        console.log("User not added");
        console.log(error);
    }
})

module.exports = router