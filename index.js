require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'welcome to pm-tool server'
    }).redirect
})

const licenseRoute = require('./routes/licenseRoute')
app.use("/",licenseRoute)

app.get('/test',(req,res)=>{
    res.status(200).json({
        message:'test route success backend running successfully',
	url:'https://resolve-pm.vercel.app/'
    })
})

app.listen(PORT,async()=>{
    await connectDB()
    console.log("app is running")
})
