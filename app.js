var express = require('express');
var mongoose = require('mongoose');

var app = express();
app.set('port',(process.env.PORT||3000));
var routes = require('./controller/route');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds151127.mlab.com:51127/jasil_db');

app.use('/', routes)

app.listen(3000);
console.log('Listening on port: 3000');
