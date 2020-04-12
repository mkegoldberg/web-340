/*
============================================
; Title:  employee.js
; Author: Mike Goldberg
; Date:   04 April 2020
; Description: Employee Database Model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  empID: { type: String, required: true },
  department: { type: String, required: false },
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);
