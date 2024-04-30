import { Schema,model } from "mongoose";

const schema = new Schema({
    profile:{
        type: String,
        required: false,
        unique: false
    },
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
    }
});



export default model.User || model("user",schema);