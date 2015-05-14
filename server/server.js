// Transparently support JSX
require('node-jsx').install();

var _ = require('lodash');
var fs = require('fs');

var React = require('react');
var Router = require('react-router');
var routes = require('../app/routes.jsx');

var express = require('express');
var app = express();
var path = require('path');

var template = fs.readFileSync( path.join(__dirname + '/..', 'index.html'), 'utf8' );


app.get('/build/:name', function( req, res ) {

  var options = {
    root: __dirname + '/../build/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile( fileName, options, function ( err ) {
    if( err ) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent:', fileName);
    }
  });

});

app.get('*', function( req, res ) {
  
  console.log(' get * ');
  
  Router.run( routes, req.path, function( Handler, router ) {    
    var data = React.renderToString( React.createElement(Handler) );
    var html = _.template( template )({ data : data });
    res.send( html );
  });
  
});


app.listen(3000);