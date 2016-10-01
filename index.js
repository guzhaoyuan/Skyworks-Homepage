var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('homepage'));

app.post('/post',function (req, res) {
    console.log(req.body);

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://tiankonggongchang%40gmail.com:tiankonggongchang1@smtp.gmail.com');

//setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.name + req.body.email, // sender address
        to: 'guzhaoyuan@126.com', // list of receivers
        subject: '[Homepage Message]', // Subject line
        text: req.body.message, // plaintext body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });

    //res.sendStatus(200);
    res.redirect("/contact.html");
    //res.end('{"success" : "Updated Successfully", "status" : 200}');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

