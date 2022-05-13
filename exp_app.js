const express = require('express');
const app = express();
app.get('/abc',function(req,res){
    res.send('Hello Express js');
}).listen(4500);