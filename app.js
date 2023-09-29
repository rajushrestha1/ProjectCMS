const { connectDatabase } = require("./Database/database");
const Blog = require("./model/blogmodel");
const express = require("express")
const app = express();


// nodejs lai form bata aako data parse gar vaneko ho 
app.use(express.json());
app.use(express.urlencoded({extended:true}))

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