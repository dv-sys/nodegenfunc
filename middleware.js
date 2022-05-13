const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();

const myLogger = function(req,res,next){
    console.log('Current Page is : ' , req.originalUrl);
    next();
}

//app.use(myLogger); //Global Middleware

app.get('/',function(req,res){
    res.send("Home Page");
})

app.get('/about',function(req,res){
    res.send("About Page");
})

router.get('/contact',myLogger,function(req,res){ 
    res.send("Contact Page");
})
app.use('/',router); //Router Middleware

app.listen(9000);
