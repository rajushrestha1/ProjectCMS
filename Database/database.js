
const mongoose= require("mongoose")
exports.connectDatabase = async()=>{

    // connecting to database
    // jaba samman database samman connect hudaina wait gaar
    await mongoose.connect("mongodb+srv://csit2078:csit2078@cluster0.cqvqzzd.mongodb.net/?retryWrites=true&w=majority")
    
        console.log("Database connect succesfully")
    }
    
