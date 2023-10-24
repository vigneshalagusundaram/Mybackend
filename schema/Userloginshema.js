const mongoose = require('mongoose');

function validateEmail(email_id) {
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

let UserSchema =new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:'student'},
    status:{type:Boolean,defult:true},
    createdAt:{type:Date,default:Date.now()},
    

},{versionKey:false})

let UserDetails = mongoose.model('UserDetails', UserSchema)
module.exports = {UserDetails}