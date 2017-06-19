var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
 
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/demo', function(request, response) {
    response.type('json');

    var url = proc.env.PROD_MONGODB;
    response.status(200).send(url);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


let Object = function() {
}; 

