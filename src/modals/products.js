import mongoose, { Schema } from "mongoose";

const Product = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("Product", Product)