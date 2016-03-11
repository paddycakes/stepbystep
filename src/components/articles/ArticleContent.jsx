var React = require('react');

/*
  ArticleContent needs:
  - imageUrl
  - textual content
  - author
  - dateCreated
 */
module.exports = React.createClass({
  render: function () {
    var imageUrl = this.props.imageUrl;
    var text = this.props.text;
    var author = this.props.author;
    var dateCreated = this.props.dateCreated;
    return <div>
      <img className="post_pic" src="assets/img/replace/blog_post.jpg" />
      <div className="post_content">
        <p>{this.props.text}</p>
        <div className="author">{this.props.author}</div>
        <div className="date">{this.props.dateCreated}</div>
      </div>
    </div>
  }
});