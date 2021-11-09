var express=require('express');
var app=express();
var f1=(req,res,next)=>{
    console.log('1st')
    next()
}
var f2=(req,res,next)=>{
    console.log('2nd')
    next()
}
var f3=(req,res,next)=>{
    console.log('3rd')
    next()
}
var f4=(req,res)=>{
    res.send('This is the end')
}
app.get('/',[f1,f2,f3,f4])
app.listen(4500)
