const {Schem,model}= require("mongoose");
 const User=new Schem(
    {
        name:{type:String,trim:true},
        email:{type:String,trim:true,unique:true},
    }
 )
 module.export=model("user",User);