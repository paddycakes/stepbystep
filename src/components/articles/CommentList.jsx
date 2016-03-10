var React = require('react');
var _ = require('lodash');
var Comment = require('./Comment');

var options = {
  comments: [{
    name: "Alejandra Galvan",
    date: "Oct 12, 2015",
    content: "I love this article. It really struck a chord with me. Thanks for posting."
  }, {
    name: "Patrick Gallagher",
    date: "Jan 02, 2016",
    content: "So powerful and interesting. The articles on your website are fantastic."
  }, {
    name: "Zhaleh Rabiei",
    date: "Feb 03, 2016",
    content: "Thanks for the postive feedback. I am really glad you enjoyed reading this article."
  }]
};

// TODO: Add list of dynamic comments (initially from file, then db)
// TODO: What about dates in comment
// TODO: Sort by date order (most recent first)
module.exports = React.createClass({
  render: function () {
    return <Comment />
  }
});