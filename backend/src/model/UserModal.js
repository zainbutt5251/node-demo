const { Schema, model } = require("mongoose");
 const user=new Schema(
    {
        name:{type:String,trim:true},
        email:{type:String,trim:true,unique:true},
    }
 )
 module.export=model("user",user);