"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var App = require('./components/App');
var ArticleList = require('./components/articles/ArticleList');
var Article = require('./components/articles/Article');

// TODO: Sort out DefaultRoute - should this be pointing towards index.html or HomePage component?
// TODO : Should i use path for /articles like /article?
// TODO : What about passing data to these routes (where does this happen)?
var routes = (
      <Route path="/" component={App}>
        <Route path="articles" component={ArticleList} />
        <Route path="/article/:articleId" component={Article} />
      </Route>
);

module.exports = routes;