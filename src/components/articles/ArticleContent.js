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
    return <div>
      <img className="post_pic" src={"assets/img/replace/" + this.props.imageUrl} />
      <div className="post_content">
        <p>{this.props.text}</p>
        <div className="author">{this.props.author}</div>
        <div className="date">{this.props.dateCreated}</div>
      </div>
    </div>
  }
});