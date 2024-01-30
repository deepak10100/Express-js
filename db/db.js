import mongoose from 'mongoose';

export const databaseConnetion =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/backendApi')
  .then(() => console.log('Connected!'));
}
  