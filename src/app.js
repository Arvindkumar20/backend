import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}))
app.use(express.json({
    limit: "10kb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "10kb"
}))
app.use(express.static("public"));
app.use(cookieParser());

//import routes here 
import userRouter from "./routes/user.routes.js";

// declare routes here
app.use("/api/v1/users",userRouter);

//export app
export { app };
