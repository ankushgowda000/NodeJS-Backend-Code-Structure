const Joi = require('joi')

const withdrawSchema = Joi.object({
    amount: Joi.number().required()
});

module.exports = withdrawSchema;