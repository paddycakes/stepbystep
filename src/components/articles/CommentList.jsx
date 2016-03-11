var React = require('react');
var _ = require('lodash');
var Comment = require('./Comment');

// TODO: Add list of dynamic comments (initially from file, then db)
// TODO: What about dates in comment
// TODO: Sort by date order (most recent first)
// TODO: Need a check to not show the Comments header if there are no comments
module.exports = React.createClass({
  render: function () {
    var commentList = _.map(this.props.comments, function(comment) {
      return <Comment {...comment} />
    });
    return <div className="comments">
      <h4>Comments</h4>
      {commentList}
    </div>
  }
});