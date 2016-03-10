var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <div className="navbar navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </a>
              <a className="brand scroller" data-section="body" href="index.html">
                <img src="assets/img/step_by_step_logo.png" alt="logo" />
              </a>
              <div className="nav-collapse collapse">
                <ul className="nav pull-right">
                  <li><a href="index.html" data-section="#features">Home</a></li>
                  <li><a href="aboutme.html" data-section="#pricing">About Me</a></li>
                  <li><a href="howiwork.html" data-section="#footer">How I work</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Services
                      <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="counselling.html">Counselling</a></li>
                      <li><a href="seminars.html">Seminars</a></li>
                      <li><a href="workshops.html">Workshops</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Expertise
                      <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="anxiety.html">Anxiety</a></li>
                      <li><a href="depression.html">Depression</a></li>
                      <li><a href="relmediation.html">Relationship Mediation</a></li>
                      <li><a href="stress.html">Stress</a></li>
                      <li><a href="lowselfconf.html">Low Self Confidence</a></li>
                      <li><a href="lowselfesteem.html">Low Self Esteem</a></li>
                      <li><a href="ocd.html">Obsessive Compulsive Behaviour</a></li>
                      <li><a href="angermgmt.html">Anger Management</a></li>
                      <li><a href="domviolence.html">Domestic Violence</a></li>
                      <li><a href="passaggbehaviour.html">Passive Aggressive Behavior</a></li>
                      <li><a href="ptsd.html">Post Traumatic Stress Disorder</a></li>
                      <li><a href="childrelissues.html">Child Related Issues</a></li>
                      <li><a href="adhd.html">Attention Deficit Hyperactive Disorder</a></li>
                      <li><a href="learndisabilities.html">Learning Disabilities</a></li>
                    </ul>
                  </li>
                  <li><a href="articles.html" data-section="#footer">Articles</a></li>
                  <li><a href="contact.html" data-section="#footer">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  }
});