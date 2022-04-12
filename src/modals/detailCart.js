import mongoose, { Schema, ObjectId } from "mongoose";

const DetailCartSchema = new Schema({
    cart: {
        type: ObjectId,
        ref: "Cart"
    },
    product: {
        type: ObjectId,
        ref: "Product"
    },
    quantity: Number
})

export default mongoose.model("Detailcart", DetailCartSchema)