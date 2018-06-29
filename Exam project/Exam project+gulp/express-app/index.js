var express = require("express");
var bodyParser = require("body-parser");
 
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.use(express.static(__dirname + "/public"));
 
app.post("/message", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
  response.send(`Name:${request.body.name}---Email:${request.body.email}---Topic:${request.body.topic}--- 
  	            message:${request.body.message}`);
});
 
app.get("/", function(request, response){
     
    response.send("<h1>Contact us</h1>");
});
 
app.listen(3000);