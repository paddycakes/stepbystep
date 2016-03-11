var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <div className="new_comment">
      <h4>Add Comment</h4>
      <form>
        <div className="row">
          <div className="span3">
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="span3">
            <input type="text" placeholder="Email" name="email" />
          </div>
        </div>
        <div className="row">
          <div className="span6">
            <textarea placeholder="Comments" rows="7"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="span6">
            <a href="#" className="btn">Add comment</a>
          </div>
        </div>
      </form>
    </div>
  }
});