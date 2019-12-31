const express = require("express");
const routes = express.Router();

// test route
routes.get("/test", (req, res) => {
  res.send("Test works, all good");
});

routes.get("/test-pug", (req, res) => {
  //res.send("Test works, all good");
  res.render("index");
});

module.exports = routes;
