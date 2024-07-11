"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// const ex = require('express');

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send('<h1> Hello, Worldss! </h1>');
});
app.listen(8000, function () {
  console.log("Server is listening at http://localhost:8000");
});