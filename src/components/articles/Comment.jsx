var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <div class="comment">
      <div class="row">
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 img">
          <img src="assets/images/comment_icon.jpg" class="img-circle author_pic img-responsive"/>
        </div>
        <div class="col-sm-10 col-md-10 col-lg-10">
          <div class="name">
            Alejandra Galvan
            <a href="#" class="reply">Reply</a>
          </div>
          <div class="date">
            Oct 12, 2012
          </div>
          <div class="response">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </div>
        </div>
      </div>
    </div>
  }
});