var React = require('react');
var Router = require('react-router');

var routes = require('./routes.jsx');

/**
 * Run React Router.
 */

Router.run(routes, Router.HistoryLocation, function( Handler ) {  
  React.render(<Handler/>, document.getElementById("react-root"));
});