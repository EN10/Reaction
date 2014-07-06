 var express = require("express");
 var app = express();

 /* serves main page */
 app.get("./", function(req, res) {
    res.sendfile('index.html')
 });

 /* serves all the static files */
 app.use(express.static(__dirname));

 var port = process.env.PORT || 80;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });
