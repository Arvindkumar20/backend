import mongoose from "mongoose";
import { DB_NAME } from "../contstant.js";
const connectDB = async () =>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("error occured at the par of mongo => ",error);
        process.exit(1)
    }
}
export default connectDB;