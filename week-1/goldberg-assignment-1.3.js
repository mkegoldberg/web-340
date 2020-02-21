/*
============================================
; Title:  Exercise 1.3
; Author: Mike Goldberg
; Date:   20 February 2020
; Description: Modules
;===========================================
*/

var url = require('url');

var parsedURL = url.parse('https://www.webdev.com/isfun?for=me')

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);