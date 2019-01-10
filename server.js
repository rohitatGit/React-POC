const express = require('express');
const path = require('path');
const port = process.env.port || 9000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port,() => {
    console.log("server started at port :" + port);
});