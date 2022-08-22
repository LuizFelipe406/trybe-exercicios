const express = require('express');

const app = express();

const activities = require('./data/activities');

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;

  const activitySearched = activities.find((item) => item.id === Number(id));

  res.status(200).json(activitySearched);
});

app.get('/myActivities', (req, res) => res.status(200).json(activities));

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;

  const activitiesSearched = activities.filter((item) => item.status === status);

  res.status(200).json(activitiesSearched);
});

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;

  const activitiesSearched = activities.filter((item) => item.description.includes(q));

  res.status(200).json(activitiesSearched);
});

module.exports = app;