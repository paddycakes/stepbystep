var React = require('react');
var Link = require('react-router').Link;

// TODO: Need a function to clip the text content to 200 characters and append ...
// TODO: Should the row div be moved up to the ArticleList component (as this component shouldn't necessarily dictate that it is in a row)
module.exports = React.createClass({
  summaryText: function(text) {
    return "";
  },
  render: function () {
    return <div className="post">
      <div className="row">
        <div className="span3">
          <a href="blog-post.html">
            <img className="main_pic" alt="main pic" src={"assets/img/replace/" + this.props.content.thumbnailUrl} />
          </a>
        </div>
        <div className="span4 info">
          <a href="blog-post.html">
            <h3>{this.props.title}</h3>
          </a>
          <p>{this.summaryText(this.props.text)}</p>
          <div className="post_info">
            <div className="author">
              {this.props.content.author}
            </div>
            <div className="date">
              {this.props.content.dateCreated}
            </div>
          </div>
        </div>
      </div>
      <Link to={"/article/" + this.props.id} className="btn">more</Link>
    </div>
  }
});