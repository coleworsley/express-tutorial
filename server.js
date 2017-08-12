var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer')

var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(multer({ dest: '/tmp/'}));

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
})

app.post('file_upload', function)

app.post('/process_post', urlencodedParser, function(req, res) {
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response))
})

app.get('/', function(req, res) {
  res.send('sup Get!');
});

app.post('/', function(req, res) {
  res.send('Hello POST')
})

app.delete('/del_user', function(req, res) {
  res.send('DELETE!!!!!')
})

app.get('/list_user', function(req, res) {
  res.send('Page Listing')
})

app.get('/ab*c', function(req, res) {
  res.send('Page Pattern Match')
})

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
