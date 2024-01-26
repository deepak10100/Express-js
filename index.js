const express = require('express')
const app = express()
const port = 3000
const path = require('path')
var cookieParser = require('cookie-parser')
app.use(cookieParser())
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { sign } = require('crypto')
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

const signupSchema = new Schema({
  name: String,
  email: String,
  password:String,
  cpassword:String,
  
});
const Signup = mongoose.model('Signup', signupSchema);
let auth =(req,res,next)=>{
  let {token} = req.cookies
  if (token) {
    next()
  }
  else{
    res.redirect('/login')
  }
}
app.get('/', (req, res) => {
  res.render("index")
})

app.get('/login',  (req, res) => {
  res.render("login")
})
app.get('/logout', (req, res) => {
  res.cookie('token',null,{
    expires:new Date(Date.now())
  })
  res.render("logout")
})
app.post('/login', async (req, res) => {
  let{email,password} = req.body
  let user = await Signup.findOne({email})
  
  if (!user) {
    res.redirect('/')
  }
  else if (user.password===password) {
    res.cookie('token','iamin')
    res.redirect('/des')
    console.log(user)
  } 
   else {
    res.render('login')
  }

})
app.get('/des',auth, (req, res) => {
  res.render("des")
})
app.post('/', async(req, res) => {
    let {name,email,password,cpassword} = req.body
    let user =await Signup.findOne({email})
   if (user){
      res.redirect('/login')
   }else if (password===cpassword) {
      await Signup.create({name,email,password,cpassword})
      res.redirect('/login')
    }
    else{
      console.log("password not match")

    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})