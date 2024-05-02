import { Schema,model } from "mongoose";

const schema = new Schema({
   
    username: {
        type:String,
        required: true,
        unique : true
    },
    email:{
        type:String,
        required: true,
        unique: true

    },
    password:{
        type :String,
        required:true,
        unique: false
    },
     profile:{
        type: String,
        required: false,
        unique: false
    },
    bio:{
        type:String,
        required:false,
        unique:false
    }
});



export default model.User || model("user",schema);