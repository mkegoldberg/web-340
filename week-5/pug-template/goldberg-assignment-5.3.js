/*
============================================
; Title:  Exercise 5.3
; Author: Mike Goldberg
; Date:   18 March 2020
; Description: Pug Templates
;===========================================
*/

// start program

// declare variables
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", function (request, response) {
  response.render("index", {
    message: "Im using Pug!!! The logo is awesome!"
  });
});

// start local server
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});

// end program
