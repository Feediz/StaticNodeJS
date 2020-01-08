const express = require("express");
const routes = express.Router();

const { projects } = require('../data/data.json');


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
