import mongoose from "mongoose";
import jwt  from "jsonwebtoken";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    address: String,
    contactNo: String,
    balance: Number

});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATETKEY,{expiresIn:"7d"})
    return token
};

const User = mongoose.model('user', userSchema);

export default User;