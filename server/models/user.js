import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: {type:String, unique:true},
    password: String,
    isAdmin: {type:Boolean, default:false}
})

export default mongoose.model('users', UserSchema)