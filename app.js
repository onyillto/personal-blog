const express = require('express')

const ejs = require('ejs')
const blogRoute = require('./routes/blogRout')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db'); 
const app = express()


app.use(morgan('tiny'))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

//Database Setup
dotenv.config({path: './config/.env'})
const PORT = process.env.PORT || 3000;
connectDB()

app.use((req,res,next)=>{
  console.log("next middleware made");
  next()
})




//Routing
app.use(blogRoute)


app.listen(PORT,()=>{
  console.log('Server running on Port 3000')
})