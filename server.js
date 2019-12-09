const PORT = 8080;
const app = require("https-localhost")();
var express = require('express');
var path = require('path');

// app is an express app, do what you usually do with express
var htmlPath = path.join(__dirname, 'html');

app.use(express.static(htmlPath))
app.listen(PORT);
app.get('/', function (req, res) {

});