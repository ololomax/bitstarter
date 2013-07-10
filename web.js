var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  fs.readFileSync('index.html', function (err, data) {
      if (err) throw err;
      var buffer = new Buffer(data, "utf-8");
      response.send(buffer.toString());
      console.log(data);
  });
  response.send('sasai)))');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
