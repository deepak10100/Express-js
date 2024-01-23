const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
mongoose.connect('mongodb://127.0.0.1:27017/mydata')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  name: String,
  age: Number,
  
});

const MyModel = new mongoose.model('Ticket', BlogPost);
let add = async()=>{
  let ss = await MyModel.updateMany({age:{$gt:15}},{$set:{age:19}})
  console.log(ss)
}
add()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})