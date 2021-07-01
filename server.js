// Start the app by listening on the default Heroku port

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist','tpw-project2')));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname,'dist','tpw-project2','index.html'));});
app.listen(process.env.PORT || 8080);

