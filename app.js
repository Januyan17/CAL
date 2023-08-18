require('rootpath')();
const express = require('express');
const app = express();
const verifyToken = require('./_middleware/authorize');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');
const multer = require('multer');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// LANDIGN PAGE
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// app.use("/worker", require("./worker/worker.controller"));
// app.use("/", require("./user/user.routes"));
// app.use("/", require("./connection/connection.routes"));
// app.use("/", require("./Branches/branch.routes"));
// app.use("/", require("./PaymentHistory/paymenthistory.routes"));

// app.use("/", require("./Ticket/ticket.routes"));
// app.use("/", require("./Request/request.routes"));
// app.use("/", require("./Payment/payment.routes"));
// app.use("/", require("./newLocation/newlocation.routes"));

// // app.use("/", require("./noncustomerrequest/noncustomerrequest.routes"));
// app.use("/", require("./Areas/area.routes"));
// app.use("/", require("./Road/road.routes"));
// app.use("/", require("./UserRoles/userrole.routes"));
// app.use("/", require("./UserRolePermissions/userrolepermission.routes"));
// app.use("/", require("./customer/customer.routes"));
// app.use("/", require("./employee/employee.routes"));
// app.use("/", require("./report/report.routes"));

// API ROUTES FOR ADMIN URL
app.use('/auth', require('./controllers/signupController'));
app.use('/advertisements', require('./controllers/advertisementController'));
app.use('/gpa', require('./controllers/gpaController'));
app.use('/profile', require('./controllers/profileController'));
app.use('/students', require('./controllers/studentsController'));

// app.use("/admin", require("./Adminuser/adminusers.controller"));
// app.use("/auth", require("./CustomerLogin/customerlogin.controller"));

// 404 PAGE - always should be last
app.get('*', function (req, res) {
  res.status(404).sendFile(__dirname + '/views/notfound.html');
});

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === 'production' ? process.env.PORT || 80 : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
