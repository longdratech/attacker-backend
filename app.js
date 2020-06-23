const express = require('express');
const mongoose = require('./src/database.js');
const routes = require('./routes/message.route');
const bodyParser = require('body-parser');

var app = express();

mongoose.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(routes);

module.exports = app;