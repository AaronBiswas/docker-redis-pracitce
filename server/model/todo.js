import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
},{timeStamps:true});


const Todo=mongoose.model("Todo",todoSchema);


export default Todo;