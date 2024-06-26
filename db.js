const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://tramsha4:Ramsha-5t5r@cluster0.aysrqcc.mongodb.net/mern-pizza-delivery'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose