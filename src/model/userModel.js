import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
    type: String,
}
})

const userModel = mongoose.model('userModel', userSchema);
export default userModel;