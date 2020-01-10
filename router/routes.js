const express = require("express");
const routes = express.Router();

const { projects } = require('../data/data.json');

/**
 * Route serving home page shows all projects.
 * @name /
 */
routes.get("/", (req, res) => {
  res.locals.projects = projects;
  res.render("index");
});

/**
 * Route serving the about page.
 * @name /about
 */
routes.get("/about", (req, res) => {
  res.render("about");
});

/**
 * Route serving login form.
 * @name /projects/:id
 * @param {int} id - project id
 */
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
