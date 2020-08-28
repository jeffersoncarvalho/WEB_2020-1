var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var disciplinas = require('./routes/DisciplinaRoute');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/users', users);
app.use('/disciplinas', disciplinas);

module.exports = app;

/*
     1 - http://localhost:3002
     2 - http://localhost:3002 + /users
     3 - http://localhost:3002/users + /list

*/