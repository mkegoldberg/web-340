/*
============================================
; Title:  EMS Project
; Author: Mike Goldberg
; Date:   18 March 2020
; Description: Employee Management System
;===========================================
*/

// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
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


// setup csrf protection
var csrfProtection = csrf({ cookie: true });


// initialize express
var app = express();


// use statements
app.use(logger("short"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(helmet.xssFilter());
app.use(csrfProtection);
app.use(function (request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});
app.use(logger("short"));


// routing
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
// app.set('port', process.env.PORT || 8080);


/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Employee[]
 * URL: localhost:8080
 */
app.get("/", function (request, response) {
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

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get('/new', function (req, res) {
  res.render('new', {
    title: 'EMS | New'
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: firstNAme, lastName, empID, department
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post("/process", function (request, response) {
  debugger;
  if (!request.body.firstName) {
    response.status(400).send('Entries must have a name');
    return;
  }
  if (!request.body.empID) {
    response.status(400).send('Entries must have an employee number');
    return;
  }
  if (!request.body.department || !request.body.department === "Please Select") {
    response.status(400).send('Please select a department');
    return;
  }

  // get the request's form data
  const employeeFirstName = request.body.firstName;
  const employeeLastName = request.body.lastName;
  const empID = request.body.empID;
  const department = request.body.department;
  console.log(employeeFirstName + " " + employeeLastName);

  // create a employee model
  let employee = new Employee({
    firstName: employeeFirstName,
    lastName: employeeLastName,
    empID: empID,
    department: department,
  });

  // save
  employee.save(function (err) {
    debugger;
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeFirstName + ' saved successfully!');
      response.redirect('/');
    }
  });
});

/**
 * Description: Queries a single employee'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Employee[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
app.get('/view/:queryName', function (request, response) {
  const queryName = request.params['queryName'];

  Employee.find({ 'empID': queryName }, function (err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        response.render('view', {
          title: 'EMS | View',
          employees: employees
        })
      } else {
        response.redirect('/');
      }
    }
  })
});

// http calls
// app.get("/", function (request, response) {
//   response.render("index", {
//     message: "XSS Prevention Example"
//   });
// });


// start server
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
