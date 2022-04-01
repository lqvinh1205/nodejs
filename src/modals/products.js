import mongoose, { Schema, ObjectId } from "mongoose";

const Product = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    images: {
        type: String,
    },
    speed: {
        type: String,
    },
    technology: {
        type: String,
    },
    boost: {
        type: String,
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true })

export default mongoose.model("Product", Product)