const express = require("express");
const dotenv = require("dotenv").config();

const path = require("path");
const router = require("./router/routes");
const app = express();

// set up router
app.use(router);

// set view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/static", express.static("public"));
// start express server
app.listen(process.env.APP_PORT, () => {
  console.log(`Server listening on port: ${process.env.APP_PORT}`);
});
