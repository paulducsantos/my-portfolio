var express = require('express');

const PORT = process.env.PORT || 8080;
var app = express();

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/portfolioV2.html')
});

app.get('/projects/:projectName', function(req, res) {
  res.sendFile(process.cwd() + '/views/' + req.params.projectName + '.html');
});



app.listen(PORT, function() {
  console.log('Server listening on %s', PORT);
});