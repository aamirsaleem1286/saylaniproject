const mongoose = require("mongoose");
const Formuser= new mongoose.Schema({
  username: {type: String},
  email:{type:String},
  phone:{type:Number},
  password: { type:String},
  repassword:{type:String},
  address:{type:String},
  isAdmin:{
    type:Boolean,
    default:false
},
},
{timestamps:true}

);

// module.exports = mongoose.model("Registeruser", Registeruser);
 module.exports = mongoose.model('Form', Formuser)
