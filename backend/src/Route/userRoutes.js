const express=require("express");
const router=express.Router();
const Service=require("../Services/userService");
const {ReqMethods}= require("../_enum/enum");
const {ApiErrorHandler}=require('../_utils/handle');
const Route=()=>{
    const routes=[{
        methos:ReqMethods.GET,
        url:"/",
        middlewares:[],
        fn:ApiErrorHandler(Service.GET),
    }]

    return routes;
}
module.exports=Route();