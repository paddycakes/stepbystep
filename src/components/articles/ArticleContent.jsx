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
      <img class="post_pic img-responsive" src="images/blog_post.jpg" />
      <div class="post_content">
        {this.props.text}
        <div class="author">{this.props.author}</div>
        <div class="date">{this.props.dateCreated}</div>
      </div>
    </div>
  }
});