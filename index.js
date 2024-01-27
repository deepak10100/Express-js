require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const userrouter = require('./routes/users')
const connectDB = require('./db/db');
connectDB()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use(userrouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})