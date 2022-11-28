const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Connection created')
    else console.log('Error while connected to database'+err)
})