import mongoose, { Schema, ObjectId } from "mongoose";

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        index: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true})

export default mongoose.model("Product", Product)