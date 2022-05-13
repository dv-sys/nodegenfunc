var mysql = require('mysql');
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"emp"
}); 

conn.connect(function(error){
    if(error) throw error;
    conn.query("select * FROM empmast",function(err,result){
        if(err) throw err;
        console.warn('all the results are here : ' , result);           
    });
})