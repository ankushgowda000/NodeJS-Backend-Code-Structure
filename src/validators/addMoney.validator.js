const Joi = require('joi')

const addMoneySchema = Joi.object({
    amount: Joi.number().required(),
});

module.exports = addMoneySchema;