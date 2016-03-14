var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var routes = require('./routes');
// var Template = require('./components/Template')

// Ask React to render this component
// var element = React.createElement(Template, null);

Router.run(routes, function(Handler) {
  // Place the rendered element in the dom.
  ReactDOM.render(<Handler/>, document.querySelector('#app'))
});

