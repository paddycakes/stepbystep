var React = require('react');
var Article = require('./Article');

// TODO: Add list of dynamic articles (initially from file, then db)
module.exports = React.createClass({
  render: function () {
    return <Article />
  }
});