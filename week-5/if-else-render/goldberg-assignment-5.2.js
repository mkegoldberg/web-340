/*
============================================
; Title:  Exercise 5.2
; Author: Mike Goldberg
; Date:   18 March 2020
; Description: EJS Templates
;===========================================
*/

// start program

// declare variables
var express = require("express");
var http = require("http");
var path = require("path");

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var N = [
  "Jim",
  "Pam",
  "Michael",
  "Dwight"
];

app.get("/", function (request, response) {
  response.render("index", {
    names: N
  });
});

// start local server
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});

// end program
