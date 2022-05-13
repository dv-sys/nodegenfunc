var http = require('http');
var log = require('./log');
http.createServer(function(req, res){
    res.write('Test 12');
    res.end();
}).listen(8000);
//console.log("Hello");
log.warning('Node is Started')


//Call Back function
var calc = function(fx,a,b){
    return fx(a,b);
};

var sum = function(x,y){
    return x+y;
}

var diff = function(x,y){
    return x-y;
}
let sm = calc(sum,4,5);
let mn = calc(diff,7,3);
console.log('CallBack SUM Function Output : ',sm);
console.log('CallBack Diff Function Output : ',mn);