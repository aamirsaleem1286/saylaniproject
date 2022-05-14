const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const findOrCreate = require("mongoose-findorcreate");



const GoogleSchema=new Schema({
username:{
    type:String },
googleID:{
    type:String
},
givenName:{type:String},
familyName:{type:String},
emails:{   type:String},
gender:{type:String},
birthday:{type:String},
language:{type:String},
placesLived:{type:String},
relationship:{type:String},
picture:{type:String},
coverPhoto:{type:String},
isPerson:{type:String},
isPlusUser:{type:String},
})
GoogleSchema.plugin(findOrCreate);


const Google=mongoose.model('Google',GoogleSchema);
module.exports=Google;