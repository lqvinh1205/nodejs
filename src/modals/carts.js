import mongoose, { Schema, ObjectId } from "mongoose";

const CartSchema = new Schema({
    total: Number,
    user: {
        type: ObjectId,
        ref: "User"
    },
    status: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export default mongoose.model("Cart", CartSchema)