var path = require('path');
var express = require('express');
var TodoService = require('./todoservice.js');

var app = express();

var staticPath = path.join(__dirname, '../../public');
app.use(express.static(staticPath));

app.get('/todos', function(req, res) {
  let list = TodoService.listTodos();
  res.json({todos: list});
});

app.listen(3000, function() {
  console.log('listening');
});
