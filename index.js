var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

var http = require('http');
var server = http.server(app);

//setup engine
server.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app);

//port listener
server.listen(process.env.PORT || 3000, function(){
	console.log('Connected on port 3000');
});