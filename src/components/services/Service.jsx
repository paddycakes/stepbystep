var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <div id="blog_wrapper" className="blog_post">
      <div className="container">
        <div className="row">

          <div className="span12">

            <h1 className="header-center">
              {this.props.title}
            </h1>

            <div className="row-fluid">
              <div className="span10 offset1">
                <img className="post_pic" src={"assets/img/full/" + this.props.imageUrl} />
              </div>
            </div>

            <div className="post_content">
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
});