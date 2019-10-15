
const path = require("path");
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

var server = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require('./router/router'));
server.listen(3000);

