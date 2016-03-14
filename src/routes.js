"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

// TODO: Sort out DefaultRoute - should this be pointing towards index.html or HomePage component?
// TODO : Should i use path for /articles like /article?
// TODO : What about passing data to these routes (where does this happen)?
var routes = (
  <Route name="app" path="/" handler={require('./components/App')}>
      <DefaultRoute handler={require('./components/articles/ArticleList')} />
      <Route name="articles" handler={require('./components/articles/ArticleList')} />
      <Route name="article" path="/article/:articleId" handler={require('./components/articles/Article')} />
  </Route>
);

module.exports = routes;