var express = require("express");
var path = require('path');  

var app = express();

app.get("/",function(req,res) {
	res.sendFile(path.join(__dirname, './', 'index.html'));
})


var server = app.listen(3000,function() {
    console.log("Listening at " + server.address().address + ": " + server.address().port);
});