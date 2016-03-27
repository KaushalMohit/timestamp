'use strict';
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var api = require('./app/api/timestamp.js');
var routes = require('./app/routes/index.js');
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

var port = process.env.port || 8080;

routes(app);
api(app);

app.listen(port);
