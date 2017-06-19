var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;


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

    var sendResponse = function (test) {
        response.status(200).send(test);
    };

    var url = process.env.PROD_MONGODB || "mongodb://demo:demo@ds131512.mlab.com:31512/reblaus"; //'mongodb://localhost:27017/reblaus';
    MongoClient.connect(url, function(err, db){
        console.log("Connected!");
        var collection = db.collection('VersionInfo');
        collection.findOne(function (err, doc) {
            sendResponse(doc);
        });
        db.close();
        console.log("closed!");

    });


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


