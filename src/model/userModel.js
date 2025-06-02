import mongoose from "mongoose";
import multer from 'multer';

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
   file: {
    type: String
   }
    
})

const userModel = mongoose.model('userModel', userSchema);
export default userModel;