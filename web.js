var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  fs.readFileSync('index.html', 'utf8', function (err, data) {
      if (err) throw err;
      var buffer = new Buffer(data);
      response.send(data.toString()));
      //response.send('azaza');
  });
  response.send('buffer.toString()');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
