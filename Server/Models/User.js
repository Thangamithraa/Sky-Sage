const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    cities:{
        type:[String],
        default:["Chennai","Bengaluru","Mumbai","Delhi","Kolkata"]
    }
})

const userModel = mongoose.model("skysageUser",userSchema)

module.exports = userModel