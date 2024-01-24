const express = require('express')
const bankController = require('./src/controller/bankController')
const app = express()
const port = 3001
const { auth, validator } = require('./src/middleware');

app.use(express.json({
  type: "application/json",
  limit: '50mb'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addMoney', [auth(), validator('addMoney')], bankController.addMoney)

app.post('/checkBalance', auth(), bankController.checkBalance)

app.post('/saveUser', [auth(), validator('saveUser')], bankController.create())

app.post('/userLogin', validator('userLogin'), bankController.userLogin)

app.post('/withdraw',[auth(), validator('withdraw')], bankController.withdraw)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})