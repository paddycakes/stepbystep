var React = require('react');
var NavBar = require('./NavBar');
var Footer = require('./Footer');
var Article = require('./articles/Article');

module.exports = React.createClass({
  render: function () {
    return <div>
      <a href="#" className="scrolltop">
        <span>up</span>
      </a>

      <NavBar/>

      <Article/>

      <Footer/>
    </div>
  }
});