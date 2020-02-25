/*
============================================
; Title:  Exercise 2.3
; Author: Mike Goldberg
; Date:   24 February 2020
; Description: Routes
;===========================================
*/

// Variable declaration:
var express = require("express");

var http = require("http");

var app = express();

// output
app.get("/", function (request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function (request, response) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function (request, response) {
  response.end("Welcome to the contact page!");
});

app.use(function (request, response) {
  response.statusCode = 404;
  response.end("404!");
});

// start local
http.createServer(app).listen(8080);

// end program
