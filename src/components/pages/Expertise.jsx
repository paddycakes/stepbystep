var React = require('react');
var Service = require('../services/Service');

// TODO: Is this exactly the same as Services?
// TODO: Need to dynamically load content to pass into Service component
// TODO: Get service name from url
module.exports = React.createClass({
  render: function () {
    // TODO: Use this value to load the correct service via Firehose
    var expertiseId = this.props.params.expertise;

    return <Service />
  }
});