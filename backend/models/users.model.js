const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password must contain 8 characters"],
      }
},{
    versionKey: false,
});


const UserModel = mongoose.model("user", userSchema);


module.exports = {
    UserModel
};