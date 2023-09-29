const { connectDatabase } = require("./Database/database");
const Blog = require("./model/blogmodel");
const express = require("express")
const app = express();

<<<<<<< HEAD

// nodejs lai form bata aako data parse gar vaneko ho 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
=======
const app=require('express')()
const mongoose =require('mongoose')()
// Database connection function
connectDatabase
>>>>>>> 836a5573c8d9315a1f917f1e9158bd7c0e75ac4c

// DATABASE CONNECTION FUNCTION
connectDatabase()


// GET API -> /
app.get("/",(req,res)=>{
    res.json({
        status : 200,
        message : "Succcess"
    })
})


// CREATE BLOG API  
app.post("/createblog",async (req,res)=>{
   const title = req.body.title;
   const subTitle = req.body.subTitle
   const description = req.body.description

//    Alternative (object destructuring)
//    const {title,subTitle,description} = req.body

<<<<<<< HEAD
    // Insert to database logic goes here 
   await  Blog.create({
        title : title  ,
        subtitle : subtitle,
        description : description
    })

    res.json({
        status : 201,
        message : "Blog created succesfully"
    })
    // Alternative 
    // res.status(200).json({
    //     message : "Blog created successfully"
    // })
})

app.listen(3000,()=>{
    console.log("Nodejs has started at port 3000")
})
=======
app.listen(3000,function(){
console.log("Nodemon project has been started on port 3000")
})
>>>>>>> 836a5573c8d9315a1f917f1e9158bd7c0e75ac4c
