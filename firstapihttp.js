var http = require('http');
var data = [{name:"anil",age:29,email:"anil@gmail.com"},
            {name:"Dharm",age:31,email:"dharm@gmail.com"}];
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900);