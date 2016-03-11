var React = require('react');
var _ = require('lodash');
var Article = require('./Article');

// TODO: Add list of dynamic articles (initially from file, then db)
module.exports = React.createClass({
  render: function () {
    var articleList = _.map(this.props.articles, function(article) {
      return <Article {...article} />
    });
    return <div className="comments">
      <h4>Comments</h4>
      {articleList}
    </div>
  }
});