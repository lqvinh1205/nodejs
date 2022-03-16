import mongoose, { Schema } from "mongoose";

const User = new Schema({
    email: {
        type: String,
        required: true,
        minLength: 5
    },
    password: {
        type: String,
        required:true,
        minLength: 5 
    }
})

export default mongoose.model("User", User)