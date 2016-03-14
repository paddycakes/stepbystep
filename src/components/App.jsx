var React = require('react');
var NavBar = require('./NavBar');
var Footer = require('./Footer');

module.exports = React.createClass({
  render: function () {
    return <div>
      <a href="#" className="scrolltop">
        <span>up</span>
      </a>
      <NavBar/>
      {this.props.children}
      <Footer/>
    </div>
  }
});