var express= require('express')
var app= express()
app.get('/hauuu',(req,res,next)=>{
    res.send('Ho, This is my first function');
    next()
})
app.post('/post',(req,res)=>{
    res.send ('This is my second function')
})

app.listen(8000);
