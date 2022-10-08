//importing express
//command to install packages
//npm install <package name>
//example : npm install express
const express = require('express');
const mongoose = require('mongoose');
//creating an instance of express
const app = express();
//middleware to parse json
app.use(express.json());
//uri of mongoDb
const uri = 'mongodb://localhost:27017/todo';

//connection to the database
mongoose.connect(uri);
//if error occur while connection
mongoose.connection.on('error', () => {
  console.log('error ocurred');
});
//if connection is successful
mongoose.connection.once('open', () => {
  console.log('connected to database');
});
//structure of table
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
});
//creating a table with the structure todoSchema
const ToDo = mongoose.model('todo', todoSchema);

//get request to retrieve data from database i.e mongoDb
app.get('/', async (req, res) => {
  const todoList = await ToDo.find();
  return res.json({
    message: 'Date retrived successfully',
    data: todoList,
  });
});

//to save data in the database that is coming from frontend
app.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = new ToDo({
      title: title,
      description: description,
    });
    const response = await todo.save();
    return res.json({
      message: 'success',
      data: response,
    });
  } catch (err) {
    console.log(err);
  }
});


//updating a document whose id is given
app.put('/',async (req, res) => {
  const { title, description, id } = req.body;
     await ToDo.findByIdAndUpdate(id,{
        title:title,
        description:description
    })
    return res.json({
        message:"Updated Successfully!",
    })
});

//deleting a document
app.delete('/:id',async (req,res)=>{
   const {id} = req.params;
   await ToDo.findByIdAndDelete(id);
   return res.json({
    message:"ToDo Deleted"
   })
})
//starting the server on port 5000
app.listen(5000);
