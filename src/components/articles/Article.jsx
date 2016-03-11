var React = require('react');
var ArticleContent = require('./ArticleContent');
var CommentList = require('./CommentList');
var AddComment = require('./AddComment');

module.exports = React.createClass({
  render: function () {
    return <div id="blog_wrapper" className="blog_post">
      <div className="container">
        <div className="row">
          <div className="span8">
            <h1 className="header">
              {this.props.title}
            </h1>
            <ArticleContent {...this.props.content} />
            <CommentList comments={this.props.comments} />
            <AddComment />
          </div>
        </div>
      </div>
    </div>
  }
});