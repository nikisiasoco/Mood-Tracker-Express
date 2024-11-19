const express = require('express');
const app = express();
//IMPORT ROUTES
const usersRouter = require('./routes/users');

//initialize routes
app.use(express.json());

app.use('/',usersRouter);

module.exports = app;