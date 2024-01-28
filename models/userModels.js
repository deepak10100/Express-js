import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SignUpSchema = new Schema({
  name: { type: String,required:true},
  email: { type: String , unique:true, required:true},
  pass:  { type: String,required:true},
  cpass:  { type: String,required:true},
  createAt:{ type:Date, default:Date.now()}
});

export let Signup = mongoose.model('Signup', SignUpSchema);