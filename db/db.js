import mongoose from 'mongoose';

export let connectdb = ()=>{
    mongoose.connect(process.env.DBURL)
  .then(() => console.log('Connected!'));
}