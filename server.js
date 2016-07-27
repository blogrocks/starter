var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app).listen(3000);

app.use(express.static("./"));

console.log("server running");