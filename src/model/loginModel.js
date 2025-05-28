import mongoose, { Schema } from "mongoose";

const login = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
const loginModel = mongoose.model('loginModel' , login);

export default loginModel; 