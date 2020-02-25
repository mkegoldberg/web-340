/*
============================================
; Title:  Exercise 2.4
; Author: Mike Goldberg
; Date:   24 February 2020
; Description: EJS Views
;===========================================
*/

// Variable declaration:
var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

// output

// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views")); 

// Tell Express to use the EJS view engine
app.set("view engine", "ejs"); 

app.get("/", function (request, response) {
    response.render("index", {
        firstName: "Mike",
        lastName: "Goldberg",
        address: "123 Perfect Street",
    });
});
// start local
http.createServer(app).listen(8080);

// end program
