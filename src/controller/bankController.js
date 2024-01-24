const { baseController } = require('./genericController')
const { bankService } = require('../services')

const addMoney = async (req, res, next) => {
    try {
        let request = req.body;
        let result = await bankService.addMoney(request);
        res.send({ "Items": result })
    }
    catch (error) {
        next(error)
    }
}
const checkBalance = async (req, res, next) => {
    try {
        let request = req.body;
        let result = await bankService.checkBalance(request);
        res.send({ "Items": result })
    }
    catch (error) {
        next(error)
    }
}

const userLogin = async (req, res, next) => {
    try {
        let request = req.body;
        let result = await bankService.userLogin(request);
        res.send({ "Items": result })
    }
    catch (error) {
        next(error)
    }
}

const withdraw = async (req, res, next) => {
    try {
        let request = req.body;
        let result = await bankService.withdraw(request);
        res.send({ "Items": result })
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    ...baseController,

    addMoney,
    checkBalance,
    userLogin,
    withdraw
}