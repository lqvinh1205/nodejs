import mongoose, {ObjectId} from 'mongoose';
const Schema = mongoose.Schema;

let ItemSchema = new Schema(
    {
        productId: {
            type: ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        price: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const CartSchema = new Schema(
    {
        items: [ItemSchema],
        subTotal: {
            default: 0,
            type: Number
        },
        userId: String,
        status: String
    },
    {
        timestamps: true
    }
);
export default mongoose.model('Cart', CartSchema);
