var fs = require('fs');
var express = require('express');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');

app.get('/', function(req, res) {
  var content = '';
  fs.readdirSync('./slides').forEach(function(file) {
    content += fs.readFileSync('./slides/' + file)
  });

  res.render('index.html', {content: content});
});

app.listen(8888, function() {
  console.log('open http://localhost:8888');
});
