var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <div className="comment">
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 img">
          <img src="assets/img/comment_icon.jpg" className="img-circle author_pic img-responsive"/>
        </div>
        <div className="col-sm-10 col-md-10 col-lg-10">
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