var React = require('react');
var ReactDOM = require('react-dom');

// Ask React to render this component
var element = React.createElement('h1', null, 'Hello World');

// Place the rendered element in the dom.
ReactDOM.render(element, document.querySelector('.container'));


