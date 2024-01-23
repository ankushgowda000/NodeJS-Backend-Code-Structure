const { baseService } = require('./genericService');
const { bankRepository } = require('../repository');
const { jwt } = require('../helper')

const addMoney = async (request) => {
    const { currentUser, amount } = request;
    console.log(currentUser)
    let user = await bankRepository.getById(currentUser.userId);
    if(amount>0){
        var updatedBalance = user.balance + amount;
        return await bankRepository.update({ id: currentUser.userId, balance: updatedBalance })
    }
    else{
        throw new Error("Please Enter Valid Amount")
    }
}

const checkBalance = async (request) => {
    const { currentUser } = request;
    const user = await bankRepository.getById(currentUser.userId);
    return {"Available Balance ":user.balance};
}

const saveUser = async (request) => {
    const user = await bankRepository.create(request);
    console.log(user)
}

const userLogin = async (request) => {
    const { email, password } = request;
    let user = await bankRepository.getByEmail(email);
    if ((user) && ((password === user[0].password))) {
        let token = jwt.jwtSign(user[0]);
        let data = { jwt: token, id: user[0].id, userName: (user[0].firstName + " " + user[0].lastName), age: user[0].age };
        return data;
    }
}

const withdraw = async (request) => {
    const { currentUser, amount } = request;
    const user = await bankRepository.getById(currentUser.userId);
    let updatedBalance;
    switch (true) {
        case amount < 0: throw new Error("Please Enter Valid Amount");
        case user.balance >= amount: updatedBalance = user.balance - amount;
            return await bankRepository.update({ id: user.id, balance: updatedBalance })
        case user.balance < amount: throw new Error("Insufficient funds");
        default:
            break;
    }
}

module.exports = {
    ...baseService,

    addMoney,
    checkBalance,
    saveUser,
    userLogin,
    withdraw
}