const  mongoose  = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  cpassword: String,
});
module.exports= Signup = mongoose.model('Signup', userSchema);