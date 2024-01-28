import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const taskSchema = new Schema({
  title: { type: String,required:true},
  des: { type: String , unique:true, required:true},
  isCompleted:  { type: Boolean, default:false},
  signup:  { type: ObjectId, ref:'Signup'},
  createAt:{ type:Date, default:Date.now()}
});

export let Task = mongoose.model('Task', taskSchema);