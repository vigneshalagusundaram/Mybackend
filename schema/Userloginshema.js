const mongoose = require('mongoose');

function validateEmail(e) {
    const emailpattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailpattern.test(e);
}
function validateMobile(e) {
    let result= true;
    for(let i=0;i<e.length;i++)
    {
        if (Number(e[i])==e[i]){
            continue;
        }
        else{
            result=false
            break; 
        }
    }
    return result
  }
let UserSchema =new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,Validata:{validator:validateEmail,massage:"invalid Email"}},
    password:{type:String,required:true,Validata:{validator:validateMobile,massage:"invalid massage"}},
    role:{type:String,default:'student'},
    status:{type:Boolean,defult:true},
    createdAt:{type:Date,default:Date.now()},
    

},{versionKey:false})

let UserDetails = mongoose.model('UserDetails', UserSchema)
module.exports = {UserDetails}