#!/usr/bin/env node

var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var filename = 'index.html';

app.get('/', function(request, response) {
  var html = fs.readFileSync(filename).toString(); 
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
