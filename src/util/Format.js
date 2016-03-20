var marked = require('marked');

module.exports = {
  markdownToHtml: function(text) {
    return marked(text);
  }
}