/*
============================================
; Title:  Exercise 4.3
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

// request using status codes
app.get("/not-found", function (request, response) {
  response.status(404);
  response.json({
    error: "Sorry, this page does not exist."
  })
});

app.get("/ok", function (request, response) {
  response.status(200);
  response.json({
    message: "Welcome, make yourself at home."
  })
});

app.get("/not-implemented", function (request, response) {
  response.status(501);
  response.json({
    error: "Try again later."
  })
});

// start server
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});

// end program
