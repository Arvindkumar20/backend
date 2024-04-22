import dotenv from "dotenv";
dotenv.config({
    path:"./env"
});
import connectDB from "./db/index.js";
connectDB();









// import mongoose from "mongoose";
// import express from "express";

// import { DB_NAME } from "./contstant.js";
// const app=express();

// app.use
// ;(async()=>{
// try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//    app.on("error",(error)=>{
//     console.log("ERROR occured = ",error);
//     throw error
//    })
//    app.listen(process.env.PORT,()=>{
//     console.log("Server is running on port",process.env.PORT);
//    })
// } catch (error) {
//     console.log("ERROR occured = ",error);

// }
// })();