import mongoose, { Schema } from "mongoose";

const Category = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        index: true,
        unique: true,
        lowercase: true
    }
}, {timestamps: true})
export default mongoose.model("Category", Category)

