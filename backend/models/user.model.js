import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    emai:{
        type:String,
        required:true,
        unique:true,
    },
     password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:10,
        
    },
    gender:{
        type:String,
        required:true,
        enum:[
            "male",
            "female"
        ]
    },
    profilePic:{
        type:String,
        default:"",
    },
},{timestamps: true});

const User = mongoose.model("User",userSchema);
export default User;