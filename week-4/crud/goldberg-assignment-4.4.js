/*
============================================
; Title:  Exercise 4.4
; Author: Mike Goldberg
; Date:   10 March 2020
; Description: CRUD
;===========================================
*/

// start program

// declare variables
var express = require("express");
var http = require("http");

var app = express();

// request using status codes
app.get("/", function (request, response) {
  response.send("Boom! You got GET");
});

app.put("/", function (request, response) {
  response.send("Post.. great job!");
});

app.post("/", function (request, response) {
  response.send("PUT it right there, pal..");
});

app.delete("/", function (request, response) {
  response.send("Are you sure ou want to delete??");
});


// start server
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});

// end program
