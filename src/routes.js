"use strict";

var React = require('react');
// var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/App');
var HomePage = require('./components/pages/Home');
var ArticleList = require('./components/articles/ArticleList');
var Article = require('./components/articles/Article');

// TODO: Sort out DefaultRoute - should this be pointing towards index.html or HomePage component?
// TODO : What about passing data to these routes (where does this happen)?
var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="home" component={HomePage} />
      <Route path="articles" component={ArticleList} />
      <Route path="article/:articleId" component={Article} />
    </Route>
);

module.exports = routes;