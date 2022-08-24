const express = require('express');
const activitiesRouter = require('./routes/ActivitiesRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use(activitiesRouter);
app.use(userRouter);

module.exports = app;