import mongoose from "mongoose";
import { mongooseAggregatePaginate  } from "mongoose";
const vedioSchema=new mongoose.Schema({
    vedioFile:{
        type:String,
        required:true
    },
    thumbNail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0,
        required:true
    },
    isPublished:{
        type:Boolean,
        default:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        
    }
    
},{timestamps:true})
vedioSchema.plugin(mongooseAggregatePaginate)
const Vedio=mongoose.model("Vedio",vedioSchema)