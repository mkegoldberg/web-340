/*
============================================
; Title:  Exercise 1.5
; Author: Mike Goldberg
; Date:   20 February 2020
; Description: Run a local server
;===========================================
*/

/*
 Expected output:

 I'm up and running!

*/

// Variable declaration:

var http = require("http");

function processRequest(req, res) {
  var body = "I'm up and running!";
  var contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

// end program
