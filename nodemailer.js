var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'dharmesh.variya@identixweb.in',
        pass:'Developer@99'
    } 

});
var mailOptions={
    from:'dharmesh.variya@identixweb.in',
    to:'variyadharm@gmail.com',
    subject:'Test Node Email',
    text:'This is node email sample for testing'
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.warn(error);
    }
    else{
        console.warn('Email has been Sent,info.response');
    }
})