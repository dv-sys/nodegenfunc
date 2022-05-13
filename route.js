const express = require('express');
const app = express();

app.get('/',function(req,res){
    //res.send('<h1>This is Home page</h1>');
    res.sendFile(__dirname+"/home.html"); // Open File With Router
})

app.get('/about',function(req,res){
    res.send('<h1>This is About page</h1>');
})

app.get('/contact',function(req,res){
    res.send('<h1>This is Contact page</h1>');
})

app.post('/login',function(req,res){
    res.send('<h1>This is Login page</h1>');
})

app.put('/edit',function(req,res){
    res.send('<h1>This is Put Route</h1>');
})

app.delete('/del',function(req,res){
    res.send('<h1>This is Delete Route</h1>');
})
app.listen(2000);