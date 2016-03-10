var React = require('react');
var ReactDOM = require('react-dom');
var Template = require('./components/Template')

// Ask React to render this component
var element = React.createElement(Template, null);

// Place the rendered element in the dom.
ReactDOM.render(element, document.querySelector('.container'));


