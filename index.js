const express = require('express')
const bodyParser= require('body-parser')
const path = require('path')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})
app.post('/', (req, res) => {
  // const username =req.body.name
  console.log(req.body)
  res.send(`name: ${req.body.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})