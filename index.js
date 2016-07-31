var express =  require('express');
var app = express();
var port = 6245;

app.get('/', function(req, res) {
  res.send("Sup!");
});

app.listen(port, function() {
  console.log('App listens on port ' + port);
});