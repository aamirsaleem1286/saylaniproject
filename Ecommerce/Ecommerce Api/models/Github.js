const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const findOrCreate = require("mongoose-findorcreate");



const Githubchema=new Schema({
    githubId:String,
    username:String,
})
Githubchema.plugin(findOrCreate);


const Github=mongoose.model('Github', Githubchema);
module.exports=Github;