const express = require('express')
const app = express()
const port = 3000
const path = require('path')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydata')
.then(() => console.log('Connected!'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const messageSchema = new Schema({
  name: String,
  email: String,
  
});
const Message = mongoose.model('Message', messageSchema);
app.get('/', (req, res) => {
  res.render("index")
})
app.get('/login', (req, res) => {
  res.render("login")
})
app.post('/login', (req, res) => {
  res.render("login")
})
app.post('/add', async(req, res) => {
    let {name,email} = req.body
    await Message.create({name,email})
    res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})