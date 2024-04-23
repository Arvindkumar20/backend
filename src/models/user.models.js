import mongoose from "mongoose";
import jwt from "json-web-token";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    username:{
        type:String, 
        required:true,
         unique:true,
        index:true,
        lowercase:true,
        trim:true,
    
    },
    email:{
        type:String, 
        required:true,
         unique:true,
         lowercase:true,
        trim:true,
        },
        fullname:{
            type:String, 
            required:true,
            index:true,
            trim:true,
        
        },
        avtar:{
         type:String, 
         required:true,
         trim:true,

        },
        cverImage:{
         type:String, 
        },
        watchHistory:
            [
                {
                    type:mongoose.Schema.Types.ObjectId,
                ref:"Video"
            }
            ],
    password:{
        type:String, 
        required:[true,"password is required"]
    },
   refresToken:{
    type:String,
   }

},{timestamps:true})
userSchema.pre("save",async function (){
    if(!this.isModified ) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.methods.generateAccessToken= function(){
    return jwt.sign(
        {
            userId:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefeshToken= function(){
    return jwt.sign(
        {
            userId:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User", userSchema);