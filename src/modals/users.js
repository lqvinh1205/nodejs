import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto"

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minLength: 5
    },
    password: {
        type: String,
        required:true,
        minLength: 5 
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

User.methods = {
    authticate(password) {
        return this.password == this.encyptPassword(password)
    },
    encyptPassword(password) {
        if(!password) return
        try {
            return createHmac("sha256", "abc").update(password).digest("hex")
        } catch (error) {
            console.log(error);
        }
    }
}
User.pre("save", function(next) {
    this.password = this.encyptPassword(this.password)
    next()
})

export default mongoose.model("User", User)