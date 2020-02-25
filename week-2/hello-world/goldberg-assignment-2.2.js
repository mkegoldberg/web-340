/*
============================================
; Title:  Exercise 2.2
; Author: Mike Goldberg
; Date:   24 February 2020
; Description: Hello World with Express
;===========================================
*/

/*
 Expected output:


*/

// Variable declaration:
var express = require("express");

var http = require("http");

var app = express();

// output
app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

// start local
http.createServer(app).listen(8080);

// end program
