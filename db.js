const mongoose = require('mongoose')
const mongoUrl = process.env.mongoUrl
const mongOptions = {useNewUrlParser : true,autoIndex: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true}

const connectDB = () =>{
    mongoose.connect(mongoUrl, mongOptions)
    mongoose.connection.once('open',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`Database Connected Sucessfully`)
        }
    })
}

module.exports = connectDB