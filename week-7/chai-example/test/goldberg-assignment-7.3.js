/*
============================================
; Title:  Exercise 7.3
; Author: Mike Goldberg
; Date:   03 April 2020
; Description: Chai Example
;===========================================
*/

var fruits = require("../goldberg-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function () {
  it("should return an array of fruits", function () {
    var f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });

});
