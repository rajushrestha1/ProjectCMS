const { connectDatabase } = require('./Database/databse')

const app=require('express')()
const mongoose =require('mongoose')()

connectDatabase

app.get('/about',(req,res)=>{
    res.json({
        status: 20,
        message: "You are in about page"
    })
})




app.listen(3000,function(){
console.log("Nodemon project has been started on port 3000")
})