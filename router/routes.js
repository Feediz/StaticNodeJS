const express = require("express");
const routes = express.Router();

const { projects } = require('../data/data.json');

// test route
routes.get("/test", (req, res) => {
  res.send("Test works, all good");
});

routes.get("/test-pug", (req, res) => {
  //res.send("Test works, all good");
  res.render("index");
});

// prod routes
routes.get("/", (req, res) => {
  res.locals.projects = projects;
  res.render("index");
});

routes.get("/about", (req, res) => {
  res.render("about");
});

routes.get("/projects/:id", (req, res) => {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === + projectId );
  if(project) {
    res.render('project', { project });
  } else {
    res.sendStatus(404);
  }
});



module.exports = routes;
