var React = require('react');
var ReactDOM = require('react-dom');
//var Router = require('react-router');
//var routes = require('./routes');
var App = require('./components/App')

// Ask React to render this component
var element = React.createElement(App, null);

ReactDOM.render(element, document.querySelector('#app'))

/*Router.run(routes, function(Handler) {
  // Place the rendered element in the dom.
  ReactDOM.render(<Handler/>, document.querySelector('#app'))
});*/



