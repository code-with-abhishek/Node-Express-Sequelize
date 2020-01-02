
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

var server = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Content-Type-Options");
  next();
  });
app.use(require('./router/router'));
server.listen(3000);

