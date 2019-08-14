var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//setup engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app);

//port listener
app.listen(process.env.PORT || 3000);
console.log('Connected on port 3000');