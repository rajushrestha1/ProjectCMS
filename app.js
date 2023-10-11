const { connectDatabase } = require("./Database/database");
const Blog = require("./model/blogmodel");
const express = require("express")
const app = express();
app.use(express.json())

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

// GET API=> blogs(All blogs)
app.get("/blog",async (req,res)=>{

    // fetching all blog from blog model

    const blog = await Blog.find()
    // check if blog contain data or not.
    if (blog.length ==0){
        res.json({
            status :200,
            message : "empty"
        })
    }else{
    res.json({
        status :200,
        message : "APi updated succesfully",
        data : blog
    })
}
})
// GET API=> for singlr blog
app.get("/blog :id",async(req,res)=>{
    const id =req.params.id

    const blog = await Blog.findById(id)
    if(blog){
        res.status(200).json({
            message : "Blog fetched succesfully",
            data : blog
        })
    }else{
        res.status(404).json({
            message : "No blog found"
        })
    }


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
        status : 200,
        message : "Blog created succesfully"
    })
    // Alternative 
    // res.status(200).json({
    //     message : "Blog created successfully"
    // })
})

// update blog API
app.patch("/blog/:id",async(req,res)=>{
    const id=req.params.id
    const title=req.body.title
    const subtitle=req.body.subtitle
    const description=req.body.description


   await Blog.findByIdAndUpdate(id,{
        title : title,
        subtitle : subtitle,
        description : description

    })
    res.status(200).json({
        message:"updted"
    })
})
app.listen(3000,()=>{
    console.log("Nodejs has started at port 3000")
})