var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
<<<<<<< HEAD
  response.send('Hello World!');
=======
  response.send('Hello World!2');
>>>>>>> 221220f7e403d8369999fa0dca806b4b8e7ed31d
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
<<<<<<< HEAD
});
=======
});
>>>>>>> 221220f7e403d8369999fa0dca806b4b8e7ed31d
