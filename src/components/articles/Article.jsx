var React = require('react');
var ArticleContent = require('./ArticleContent');
var CommentList = require('./CommentList');

var options = {
  article: {
    content: {
      imageUrl: "blog_post",
      author: "Mirca Morera",
      text: "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p><p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>",
      dateCreated: "Oct 10, 2015"
    },
    comments: [{
      name: "Alejandra Galvan",
      dateCreated: "Oct 12, 2015",
      content: "I love this article. It really struck a chord with me. Thanks for posting."
    }, {
      name: "Patrick Gallagher",
      dateCreated: "Jan 02, 2016",
      content: "So powerful and interesting. The articles on your website are fantastic."
    }, {
      name: "Zhaleh Rabiei",
      dateCreated: "Feb 03, 2016",
      content: "Thanks for the postive feedback. I am really glad you enjoyed reading this article."
    }]
  }
};

module.exports = React.createClass({
  render: function () {
    return <div class="col-sm-8 col-md-8 col-lg-8 blog-post">
      <ArticleContent {...options.article.content} />
      <CommentList {...options.comments} />
    </div>
  }
});