const Joi = require('@hapi/joi')


const validateRegister = (bodyData) =>{
    const registerSchema = Joi.object({
        firstname: Joi.string().min(3).max(20).required(),
        lastname: Joi.string().min(3).max(15).required(),
        password: Joi.string().required().min(5),
        email: Joi.string().email().min(5).required(),
        phone: Joi.string().min(10).required(),
        location: Joi.string().required(),
    })
    return registerSchema.validate(bodyData)
}

const validateLogin = (bodyData) =>{
    const loginSchema = Joi.object({
        password: Joi.string().required().min(5),
        email: Joi.string().email().min(5).required(),
    })
    return loginSchema.validate(bodyData)
}

module.exports.validateRegister = validateRegister 
module.exports.validateLogin = validateLogin 