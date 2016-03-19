var React = require('react');
var Link = require('react-router').Link;

// TODO: When link clicked, it greys out. Fix.

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
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About Me</Link></li>
                  <li><Link to="/approach">How I work</Link></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Services
                      <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/services/counselling">Counselling</Link></li>
                      <li><Link to="/services/seminars">Seminars</Link></li>
                      <li><Link to="/services/workshops">Workshops</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Expertise
                      <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link to="/expertise/anxiety">Anxiety</Link></li>
                      <li><Link to="/expertise/depression">Depression</Link></li>
                      <li><Link to="/expertise/relmediation">Relationship Mediation</Link></li>
                      <li><Link to="/expertise/stress">Stress</Link></li>
                      <li><Link to="/expertise/lowselfconf">Low Self Confidence</Link></li>
                      <li><Link to="/expertise/lowselfesteem">Low Self Esteem</Link></li>
                      <li><Link to="/expertise/ocd">Obsessive Compulsive Behaviour</Link></li>
                      <li><Link to="/expertise/angermgmt">Anger Management</Link></li>
                      <li><Link to="/expertise/domviolence">Domestic Violence</Link></li>
                      <li><Link to="/expertise/passaggbehaviour">Passive Aggressive Behavior</Link></li>
                      <li><Link to="/expertise/ptsd">Post Traumatic Stress Disorder</Link></li>
                      <li><Link to="/expertise/childrelissues">Child Related Issues</Link></li>
                      <li><Link to="/expertise/adhd">Attention Deficit Hyperactive Disorder</Link></li>
                      <li><Link to="/expertise/learndisabilities">Learning Disabilities</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/articles">Articles</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  }
});