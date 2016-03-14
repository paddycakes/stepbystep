var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
//var Route = require('react-router').Route;
//var IndexRoute = require('react-router').IndexRoute;
var routes = require('./routes');
//var App = require('./components/App');
//var HomePage = require('./components/pages/Home');
//var ArticleList = require('./components/articles/ArticleList');
//var Article = require('./components/articles/Article');

ReactDOM.render(<Router routes={routes}/>, document.querySelector('#app'));

/*
ReactDOM.render(
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="articles" component={ArticleList} />
        <Route path="article/:articleId" component={Article} />
      </Route>
    </Router>,
    document.querySelector('#app')
);
*/


