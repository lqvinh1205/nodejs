import mongoose, { Schema } from "mongoose";

const Category = new Schema({
    "name": String,
})

export default mongoose.model("Category", Category)