"use strict";

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/App');
var HomePage = require('./components/pages/Home');
var AboutPage = require('./components/pages/About');
var ApproachPage = require('./components/pages/Approach');
var ServicesPage = require('./components/pages/Services');
var ExpertisePage = require('./components/pages/Expertise');
var ArticleList = require('./components/articles/ArticleList');
var Article = require('./components/articles/Article');
var ContactPage = require('./components/pages/Contact');

// TODO: Sort out DefaultRoute - should this be pointing towards index.html or HomePage component?
// TODO : What about passing data to these routes (where does this happen)?
var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="home" component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="approach" component={ApproachPage} />
      <Route path="services/:serviceId" component={ServicesPage} />
      <Route path="expertise/:expertiseId" component={ExpertisePage} />
      <Route path="articles" component={ArticleList} />
      <Route path="article/:articleId" component={Article} />
      <Route path="contact" component={ContactPage} />
    </Route>
);

module.exports = routes;