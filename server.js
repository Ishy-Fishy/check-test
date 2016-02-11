var express = require('express');
var mongoose = require( 'mongoose' );
var morgan = require("morgan");
var bodyParser = require( 'body-parser' );

var mongo_uri = 'mongodb://'+process.env.IP+':27017';
mongoose.connect( mongo_uri );
var db = mongoose.connection;
db.on( 'error', function () {
  var msg = 'unable to connect to database at ';
  throw new Error( msg + mongo_uri );
});

var app = express();

app.use( bodyParser.json({ limit: '1mb' }) );
app.use( bodyParser.urlencoded({ extended: true, limit: '1mb' }) );
app.use(morgan('dev')); //  log every HTTP request to console

require( './model/todo' );
require( './routes' )( app );

app.get( '/', function( request, response ) {
  response.send( 'Checklist homepage\n' );
});

app.set( 'port', process.env.PORT || 3001 );

var server = app.listen(
  app.get( 'port' ),
  function() {
    console.log( 'Checklist server listening at port: '
                + server.address().port ); }
);