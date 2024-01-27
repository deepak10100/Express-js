const Signup = require('../models/users');

module.exports = createUser = async (req, res) => {
    let {name,email,password,cpassword} = req.body
    let signup = await Signup.create({name,email,password,cpassword})
  res.json({
        status:true,
        signup
  })
}