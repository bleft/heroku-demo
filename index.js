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

    var url = "mongodb://reblausapi:'3+$6n>836}wY?3+'@ds131512.mlab.com:31512/reblaus"; // process.env.PROD_MONGODB;
    MongoClient.connect(url, function(err, db){
        assert.equal(null, err);
        var version = db.VersionInfo.findOne();
        response.status(200).send(version);

    });
    response.status(200).send({"message":"all is up and running."});

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


