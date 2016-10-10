var path = require('path');
var express = require('express');
var TodoService = require('./todoservice.js');
var bodyParser = require('body-parser');

var app = express();
app.use( bodyParser.json() );

var staticPath = path.join(__dirname, '../../public');
app.use(express.static(staticPath));

app.get('/todos', function(req, res) {
  let list = TodoService.listTodos();
  res.json({todos: list});
});

app.post('/todos', function(req, res) {
  var text = req.body.text;
  let result = TodoService.saveTodo(text);
  res.json({success: result});
});

app.listen(3000, function() {
  console.log('listening');
});
