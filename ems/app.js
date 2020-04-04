/*
============================================
; Title:  EMS Project
; Author: Mike Goldberg
; Date:   18 March 2020
; Description: Pug Templates
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();
const mongoose = require('mongoose');
const Employee = require('./models/employee');

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

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (request, response) {
  // response.render("index", {
  //   title: "EMS Landing Page"
  // });
  Employee.find({}, function (err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      response.render('index', {
        title: 'EMS Landing Page',
        employees: employees
      })
    }
  });
});

// start server
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
