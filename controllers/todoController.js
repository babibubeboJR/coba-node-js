var bodyParser = require('body-parser');
var mongo = require('mongoose');

//connect to mongo db
mongo.connect('mongodb+srv://user_1:admin250397@cluster0-bsryv.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

//create schema
var schemaToDo = new mongo.Schema({
    item: String
});

//mode todo
var todo = mongo.model('todo', schemaToDo);

//example data without db
//var data = [{item: 'get mail'}, {item: 'walk with dog'}, {item: 'kick some ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo', function(req, res){
        //get data mongodb
        todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlencodedParser, function(req, res){
        //add data
        var newTodoItem = todo(req.body).save(function(err, data){
            if(err) throw err;
            console.log('new item saved');
            res.json(data);
        });
    });

    app.delete('/todo/:item', function(req, res){
        //delete data
        var get = {item: req.params.item.replace(/-/g, " ")};
        todo.deleteOne(get, function(err, data){
            if(err) throw err;
            console.log('item: ' + get.item + ' has been deleted')
            res.json(data);
        });
    });
}