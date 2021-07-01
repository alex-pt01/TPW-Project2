// Start the app by listening on the default Heroku port

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/TPW-Project2'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/TPW-Project2/index.html'));});
app.listen(process.env.PORT || 8080);
