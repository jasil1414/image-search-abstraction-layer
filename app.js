var express = require('express');
var mongoose = require('mongoose');

var app = express();
app.set('port',(process.env.PORT||3000));
var routes = require('./controller/route');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds151127.mlab.com:51127/jasil_db');

app.set('view engine','pug');
app.set('views', './views');

app.use('/', routes)

app.listen(app.get('port'), function(){
  console.log('Listening on port: '+ app.get('port'));
});
