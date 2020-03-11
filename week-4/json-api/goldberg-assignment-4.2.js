/*
============================================
; Title:  Exercise 4.2
; Author: Mike Goldberg
; Date:   10 March 2020
; Description: JSON API
;===========================================
*/

// start program

// declare variables
var express = require("express");
var http = require("http");

var app = express();

// request
app.get("/heros/:size", function (request, response) {
  var size = parseInt(request.params.lastName, "big");
  response.json({
    firstName: "Incredible",
    lastName: "Hulk",
    Size: size,
  });
});

// start server
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});

// end program
