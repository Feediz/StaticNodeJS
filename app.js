const createError = require('http-errors');
const express = require("express");
const dotenv = require("dotenv").config();

const data = require('./data/data.json');

const path = require("path");
const router = require("./router/routes");
const app = express();

// set up router
app.use(router);

// set view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/static", express.static("public"));

// catch resource not found errors
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// start express server
app.listen(process.env.APP_PORT, () => {
  console.log(`Server listening on port: ${process.env.APP_PORT}`);
});
