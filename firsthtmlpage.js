var http = require('http');
var html = `<h1>Log in Page</h1>
            <input type='text' placeholder='User Name'  /><br>
            <input type='text'  placeholder='Password' /> <br>
            <input type='submit' value='Submit'  />
            <br>`;
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write(html);
    res.end();
}).listen(5000);