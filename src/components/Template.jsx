var React = require('react');
var NavBar = require('./NavBar');
var Footer = require('./Footer');
var CommentList = require('./articles/CommentList');

module.exports = React.createClass({
  render: function () {
    return <div>
      <a href="#" className="scrolltop">
        <span>up</span>
      </a>

      <NavBar/>

      <CommentList/>

      <Footer/>
    </div>
  }
});