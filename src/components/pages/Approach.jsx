var React = require('react');
var _ = require('lodash');
var Format = require('../../util/Format');

var approaches = [{
  id: "1",
  title: "Approach",
  imageUrl: "pic_blog.png",
  text: "My training is an integrative model. This allows me to draw from a wealth of knowledge, training and experience from different therapeutic schools, and I can therefore tailor each session to your individual need.\n\nMy work is primarily through talking, but I find working creatively can help you to access deeper levels of awareness. My work can include drama therapy, focusing, relaxation, and mediation when is appropriate.\n\nI will encourage you to work at depth within out therapeutic relationships, in order to support you in establishing rich and deep relationships within your life. I believe that being understood is a central part of the healing process. I understand that the therapeutic process can be painful and difficult, as well as rich and rewarding and I strive to work with compassion and empathy to create a safe, and holding environment for our work together.\n\nAs well as face-to-face sessions, I also offer on line counselling via Skype both during the day and evening.\n\n"
  }, {
  id: "2",
  title: "Attendance",
  imageUrl: "pic_blog.png",
  text: "It is important to come to the sessions regularly to benefit from counselling and psychotherapy. If you don't attend regularly, or if you miss two sessions in a row without making contacts, I will not be able keep your place open and you will still have to pay for the missed sessions.\n\n"
  }, {
  id: "3",
  title: "Completeness",
  imageUrl: "pic_blog.png",
  text: "If at any point you feel you wish to complete your therapy, you will be asked to give 2-4  weeks notice in advance, depending on how long we have worked together. This is in order to have time to review the work we have done.\n\nMay I suggest that if you think you may be interested in having some counselling that you make an appointment for an initial session, where we can discuss your problem and how we might work together should you wish proceed. There would be no obligation to continue and you would not be charged for your first appointment.\n\n"
}];

var ApproachItem = React.createClass({
  render: function () {
    return <div className="post">
      <div className="row">
        <div className="span3">
          <a href="blog-post.html">
            <img className="main_pic" alt="main pic" src={"assets/img/replace/" + this.props.imageUrl} />
          </a>
        </div>
        <div className="span8">
          <h3>{this.props.title}</h3>
          <span dangerouslySetInnerHTML={ { __html: Format.markdownToHtml(this.props.text)} } />
        </div>
      </div>
    </div>
  }
});

module.exports = React.createClass({
  render: function () {
    var approachList = _.map(approaches, function(approach) {
      return <ApproachItem {...approach} />
    });
    return <div id="blog_wrapper">
      <div className="container">
        <div className="row">
          <div className="span12">
            <h1 className="header">
              How I Work
              <hr/>
            </h1>
            {approachList}
          </div>
        </div>
      </div>
    </div>
  }
});