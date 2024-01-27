
const mongoose = require('mongoose');


  module.exports = connectDB =()=>{
    mongoose.connect(process.env.DBURL)
  .then(() => console.log('Connected!'));
  }

