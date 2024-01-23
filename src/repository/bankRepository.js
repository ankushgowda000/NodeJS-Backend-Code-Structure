const { bankModel } = require('../models')
let { baseRepository } = require("./genericRepository");

baseRepository = baseRepository(bankModel);

const getByEmail = async (email) => await baseRepository.getByObject({ email });

module.exports = {
    ...baseRepository,

    getByEmail
}