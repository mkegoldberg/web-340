/*
============================================
; Title:  Exercise 7.2
; Author: Mike Goldberg
; Date:   03 April 2020
; Description: TDD Example
;===========================================
*/

var assert = require("assert")
describe("String#split", function () {
  it("should return an array of fruits", function () {
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  });
});

