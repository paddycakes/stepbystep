var React = require('react');
var Comment = require('./Comment');

// TODO: Add list of dynamic comments (initially from file, then db)
module.exports = React.createClass({
  render: function () {
    return <Comment />
  }
});