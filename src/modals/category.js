import mongoose, { Schema } from "mongoose";

const Category = new Schema({
    "name": String,
    "images": String
})

export default mongoose.model("Category", Category)