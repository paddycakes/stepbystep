var React = require('react');
var _ = require('lodash');
var ArticleSummary = require('./ArticleSummary');

// TODO: Add list of dynamic articles (initially from file, then db)
// TODO: This needs to be 'wrapped' by a page component
module.exports = React.createClass({
  render: function () {
    var articleSummaryList = _.map(this.props.articles, function(article) {
      return <ArticleSummary {...article} />
    });
    return <div id="blog_wrapper">
      <div className="container">
        <div className="row">
          <div className="span8">
            <h1 className="header">
              Articles
              <hr/>
            </h1>
            {articleSummaryList}
          </div>
        </div>
      </div>
    </div>
  }
});