import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected DB");
    
}).catch(err=>console.log(err)
)
const app=express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.get(
    '/',(req,res)=>{
     res.send('Hi company');
    }
)
// import routes 
import authRoutes from "./routes/auth.routes.js"

app.use('/api/auth',authRoutes);





app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
    
})