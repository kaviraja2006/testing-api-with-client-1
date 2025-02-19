const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true,unique:true},
    roles:{type:String,default:[]}

})
const user=mongoose.model("user",userschema)
const profilefield=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    age:{type:Number}

})
const profile=mongoose.model("user",profilefield)
const activitytracking=new mongoose.Schema({
    lastlogin:{type:Date}
})
const activity=mongoose.model("user",activitytracking)
module.exports=mongoose.model("user",userschema)
module.exports=mongoose.model("profile",profilefield)
module.exports=mongoose.model("activity",activitytracking)
