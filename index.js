var todoController = require(__dirname + '/controllers/todoController');

var express = require('express');
var app = express();

//port
var port = process.env.PORT || 3000;

//setup engine
app.set('view engine', 'ejs');

//static files
app.use(express.static(__dirname+'/public'));

//fire controller
todoController(app);

app.get('/', function(req, res){
    //get data mongodb
	res.end("It's working: " + __dirname);
});

//port listener
app.listen(port, function(){
	console.log('Connected on port 3000');
});