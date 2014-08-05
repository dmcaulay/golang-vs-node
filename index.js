var fs = require('fs');
var express = require('express');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');

var content = '';
fs.readdirSync('./slides').forEach(function(file) {
  content += fs.readFileSync('./slides/' + file)
});

app.get('/', function(req, res) {
  res.render('index.html', {content: content});
});

app.listen(8888);
