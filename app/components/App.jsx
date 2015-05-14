var React = require('react');
var Router = require('react-router');

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({  
  render: function() {
    return (
      <div className="nav">
        <Link to="app">Home</Link><br />
        <Link to="login">Login</Link><br />
        <Link to="another-page">Another page</Link><br />

        {/* this is the important part */}
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;