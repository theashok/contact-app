const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var contactRouter = require('./routes/contact')
const app = express();
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/contactapp')
  .then(() => console.log('Connected!'));
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/v1/contact/', contactRouter)

app.use('/',(req,res)=>{
    console.log('Welcome Contact App')
})
app.listen(5000,()=>{
    console.log('Listening at 5000')
})