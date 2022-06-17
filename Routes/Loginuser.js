const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {validateLogin} = require('../models/validation')


router.post('/sign-in', async (req, res)=>{

    //validate user data before registering

    const {error} = validateLogin(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //check if user exist
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send("User does not exist")

    //check for correct password
    const correctPassword = await bcrypt.compare(req.body.password, user.password)
    if(!correctPassword) return res.status(400).send("Invalid Password fo the user")


    //create and asign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('login-token', token).send(token)

    res.send("Login succesifull")



    res.status(200).send("Login successfull" + req.body.email)


})

module.exports = router