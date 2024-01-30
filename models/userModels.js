import mongoose from 'mongoose';
import { isAuth } from '../middlewares/auth.js';
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
const signupSchema = new Schema({
    name: { type: String, },
    email: { type: String, },
    password: { type: String, },
    cpassword: { type: String, },
    createAt: { type: Date, default: Date.now },
  
  });
  export const Signup = mongoose.model('Signup', signupSchema);
  