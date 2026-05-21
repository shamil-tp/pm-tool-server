require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 3000

const licenseRoute = require('./routes/licenseRoute')
app.use("/",licenseRoute)

app.listen(PORT,async()=>{
    await connectDB()
    console.log("app is running")
})