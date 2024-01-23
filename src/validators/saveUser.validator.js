const Joi = require('joi')

const userLoginSchema = Joi.object({
    firstName : Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
    balance: Joi.number().required()
});

module.exports = userLoginSchema;