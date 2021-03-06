var React = require('react');
var _ = require('lodash');
var ArticleSummary = require('./ArticleSummary');

// TODO: Add list of dynamic articles (initially from file, then db)
// TODO: This needs to be 'wrapped' by a page component
// TODO: Will need to sort on Article dateCreated descending order (on ArticleList page)
// TODO: Same for comments in dateCreated descending order (on Article page)
// TODO: Might need the dates in a javascript moment object and convert them to format below on output

var articles = [{
  id: "1",
  title: "Weathering relationship storms for a brighter future",
  content: {
    imageUrl: "blog_post.jpg",
    thumbnailUrl: "pic_blog.png",
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
    content: "Thanks for the positive feedback. I am really glad you enjoyed reading this article."
  }]
}, {
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
  }]}]



module.exports = React.createClass({
  render: function () {
    var articleSummaryList = _.map(articles, function(article) {
      return <ArticleSummary {...article} />
    });
    return <div id="blog_wrapper">
      <div className="container">
        <div className="row">
          <div className="span8">
            <h1 className="header">
              Articles
              <hr/>
            </h1>
            {articleSummaryList}
          </div>
        </div>
      </div>
    </div>
  }
});