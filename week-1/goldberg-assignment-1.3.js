/*
============================================
; Title:  Exercise 1.3
; Author: Mike Goldberg
; Date:   20 February 2020
; Description: Modules
;===========================================
*/

/*
 Expected output:

 https:
 www.webdev.com
 for=me

*/

// start program

// declare variables
var url = require('url');

var parsedURL = url.parse('https://www.webdev.com/isfun?for=me')

// output
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);