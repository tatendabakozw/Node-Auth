const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const helmet = require('helmet')

//middleware
app.use(morgan('common'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
const userRoute = require('./routes/user')
const adminRoute = require('./routes/admin/user')
const categoryRoute = require('./routes/categories')
const productRoute = require('./routes/product')

app.use('/user', userRoute  )
app.use('/user', adminRoute)
app.use('/api', categoryRoute)
app.use('/api', productRoute)

//database connection
const connectDB = require('./db')
connectDB()

// app.use('/',(req,res)=>{
//     res.send('Hello Rrom Server')
// })

app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Server Up On Port ${process.env.PORT}`)
    }
})