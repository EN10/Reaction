#!/usr/bin/env node

var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var filename = '/html5/index.html';
var index = fs.readFileSync(filename, String);

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
