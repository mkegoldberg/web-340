/*
============================================
; Title:  Exercise 6.2
; Author: Mike Goldberg
; Date:   25 March 2020
; Description: Mongoose
;===========================================
*/

// start program

// declare variables
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// MongoDB connection
var mongoDB = "mongodb+srv://user-01:dbUser01@buwebdev-cluster-1-f4r04.mongodb.net/test";
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();
app.use(logger("dev"));

// start local server
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});

// end program
