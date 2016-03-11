var React = require('react');
var ArticleContent = require('./ArticleContent');
var CommentList = require('./CommentList');
var AddComment = require('./AddComment');

var options = {
  article: {
    title: "Weathering relationship storms for a brighter future",
    content: {
      imageUrl: "blog_post",
      author: "Graeme Orr MBACP (Accred)",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
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
    return <div id="blog_wrapper" className="blog_post">
      <div className="container">
        <div className="row">
          <div className="span8">
            <h1 className="header">
              {options.article.title}
            </h1>
            <ArticleContent {...options.article.content} />
            <CommentList {...options.comments} />
            <AddComment />
          </div>
        </div>
      </div>
    </div>
  }
});