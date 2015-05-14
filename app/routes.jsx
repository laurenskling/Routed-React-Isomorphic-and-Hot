var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;


var Login = require('./components/Login.jsx');
var Page = require('./components/Page.jsx');
var App = require('./components/App.jsx');

var Home; //require something
var NotFound; //require something


/**
 * The React Routes for both the server and the client.
 */
 
var Routes = (
  <Route name="app" path="/" handler={App}>
  <Route name="login" path="/login" handler={Login} />
  <Route name="another-page" path="/another-page" handler={Page} />
  <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = Routes;