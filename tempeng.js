const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/profile/:name',function(req,res){
    console.warn(req.params);
    const data = {email:"variyadharm@gmail.com",city:"Surat",skills:["php","node","react","mySql"]};
    res.render('profile',{uname:req.params.name,data});
});

app.listen(8080);