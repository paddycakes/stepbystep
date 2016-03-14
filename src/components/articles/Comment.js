var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <div className="comment">
      <div className="row">
        <div className="span1">
          <img src="assets/img/replace/comment_icon.jpg" className="img-circle author_pic" />
        </div>
        <div className="span6">
          <div className="name">
            {this.props.name}
            <a href="#" className="reply">Reply</a>
          </div>
          <div className="date">
            {this.props.dateCreated}
          </div>
          <div className="response">
            {this.props.content}
          </div>
        </div>
      </div>
    </div>
  }
});