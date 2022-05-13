var fs = require('fs');
rs = fs.ReadStream('demo.txt');
rs.on('open',function(){
    console.log('File is open..!');
})


//event emit
var events = require('events');
var eventEmit = new events.EventEmitter();

eventEmit.on("speak",function(name){
    console.log('is Speaking : ' , name);
});

eventEmit.emit("speak","Dharm");
