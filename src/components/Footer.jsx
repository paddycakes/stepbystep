var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <div id="footer">
      <div className="container">
        <hr/>
        <div className="row copyright">
          <div className="span5">
            <h3>Social</h3>
            <a href="#" className="social fb">
              <i className="i_facebook"></i>
            </a>
            <a href="#" className="social yt">
              <i className="i_youtube"></i>
            </a>
          </div>
          <div className="span2 offset5 copy">
            <p>2016 - StepByStep</p>
          </div>
        </div>
      </div>
    </div>
  }
});