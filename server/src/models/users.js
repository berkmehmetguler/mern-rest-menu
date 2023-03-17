import mongoose from "mongoose";



const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


export const UserModel = mongoose.model("user", UserSchema);
