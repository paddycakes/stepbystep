var React = require('react');
var NavBar = require('./NavBar');
var Footer = require('./Footer');

module.exports = React.createClass({
  render: function () {
    return <div>
      <a href="#" class="scrolltop">
        <span>up</span>
      </a>
        
      <NavBar/>

      <Footer/>
    </div>
  }
});