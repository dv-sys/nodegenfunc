const express = require('express');
const app = express();

app.use('/assets',express.static('assets'));
app.set('view engine','ejs');

app.get('/profile/:name',function(req,res){
    console.warn(req.params);
    const data = {email:"variyadharm@gmail.com",city:"Surat",skills:["php","node","react","mySql"]};
    res.render('profile',{uname:req.params.name,data});
});

app.get('/login',function(req,res){
    console.log(req.query);
    res.render('login');
});

app.get('/',function(req,res){
    res.render('home');
});

app.listen(8080);