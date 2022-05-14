const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: {type: String},
  email:{type:String},
  phone:{type:Number},
  password: { type:String},
  repassword:{type:String},
  address:{type:String},
  country:{type:String},
});

module.exports = mongoose.model("User", user);