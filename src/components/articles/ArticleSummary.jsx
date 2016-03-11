var React = require('react');

// TODO: Should the row div be moved up to the ArticleList component (as this component shouldn't necessarily dictate that it is in a row)
// TODO: Need to sort out the 'more' routing
module.exports = React.createClass({
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
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
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
      <a href="blog-post.html" className="btn">more</a>
    </div>
  }
});