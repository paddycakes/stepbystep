var React = require('react');
var ArticleContent = require('./ArticleContent');
var CommentList = require('./CommentList');
var AddComment = require('./AddComment');

var article = {
  id: "2",
  title: "Anger: an instant way to handle it better",
  content: {
    imageUrl: "blog_post.jpg",
    thumbnailUrl: "pic_blog.png",
    author: "Virginia Sherborne MBACP",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    dateCreated: "Jan 21, 2016"
  },
  comments: [{
    name: "Kate Goodson",
    dateCreated: "Jan 21, 2016",
    content: "Really thought provoking."
  }, {
    name: "Patrick Gallagher",
    dateCreated: "Feb 09, 2016",
    content: "There is a great follow up to this article at www.counselling.com/1234."
  }, {
    name: "Kamal Kamali",
    dateCreated: "Feb 12, 2016",
    content: "I think Virgina makes some really valid points."
  }]};

// TODO: This needs to be 'wrapped' by a page component
module.exports = React.createClass({
  render: function () {
    // TODO: Use this value to load the correct article via Firebase
    var articleId = this.props.params.articleId;

    return <div id="blog_wrapper" className="blog_post">
      <div className="container">
        <div className="row">
          <div className="span8">
            <h1 className="header">
              {article.title}
            </h1>
            <ArticleContent {...article.content} />
            <CommentList comments={article.comments} />
            <AddComment />
          </div>
        </div>
      </div>
    </div>
  }
});