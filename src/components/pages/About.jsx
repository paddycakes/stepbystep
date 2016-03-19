var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    return <div id="blog_wrapper">
      <div className="container">
        <div className="row">

          <div className="span8">

            <h1 className="header">
              About Me
              <hr className="about" />
              </h1>

              <div className="post">
                <div className="row">
                  <div className="span3">
                    <a href="anxiety.html">
                      <img className="main_pic" alt="main pic" src="assets/img/zhr.jpg" />
                    </a>
                  </div>
                  <div className="span4 info">
                    <h3>Zhaleh Rabiei</h3>
                    <p>Zhaleh Rabiei, MA, Doctorate student in counselling Psychology and Psychotherapy,
                      A graduate member of BPS (MBPsS/ GBC), a student member with UKCP.</p>
                    <p>I work as an integrative counsellor and psychotherapist. I can offer a confidential,
                      non judgmental and deeply respectful service.</p>

                    <h5>Training, Qualification, and Experience</h5>
                    <ul>
                      <li>Doctorate student in counselling Psychology and Psychotherapy</li>
                      <li>Graduate Diploma in Psychology</li>
                      <li>Master Degree in Psychology</li>
                      <li>Certificate in Person Centred Counselling Skills</li>
                      <li>Certificate in Drama therapy</li>
                    </ul>
                    <p>Other training courses completed:
                      <ul>
                        <li>NLP</li>
                        <li>Mediation</li>
                        <li>Mentoring</li>
                        <li>Meditation and relaxation</li>
                        <li>Mindfulness</li>
                        <li>Focusing</li>
                        <li>ISTPD: Intensive Short Term Dynamic Psychotherapy</li>
                      </ul>
                    </p>
                    <h5>Experience</h5>
                    <p>I have experience in working in Edgware Hospital, private practice, and voluntary agencies. MENTION FARSIPHONE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="span3 sidebar offset1">
              <h4 className="sidebar_header" style={{marginTop : "0px !important"}}>
                Areas of Expertise
              </h4>


              <ul className="recent_posts">
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/anxiety">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/anxiety.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/anxiety" className="link">Anxiety</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/depression">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/depression.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/depression" className="link">Depression</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/relmediation">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/relationship.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/relmediation" className="link">Relationship Mediation</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/stress">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/stress.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/stress" className="link">Stress</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/lowselfconf">
                        <img className="thumb" alt="thumb post" src="assets/img/replace/pic_blog.png" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/lowselfconf" className="link">Low Self Confidence</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/lowselfesteem">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/lowselfesteem.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/lowselfesteem" className="link">Low Self Esteem</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/ocd">
                        <img className="thumb" alt="thumb post" src="assets/img/replace/pic_blog.png" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/ocd" className="link">Obsessive Compulsive Behavior</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/angermgmt">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/angermanagement.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/angermgmt" className="link">Anger Management</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/domviolence">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/domesticviolence.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/domviolence" className="link">Domestic Violence</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/passaggbehaviour">
                        <img className="thumb" alt="thumb post" src="assets/img/replace/pic_blog.png" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/passaggbehaviour" className="link">Passive Aggressive Behavior</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/ptsd">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/posttraumatic.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/ptsd" className="link">Post Traumatic Stress Disorder</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/childrelissues">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/childrelatedissues.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/childrelissues" className="link">Child Related Issues</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/adhd">
                        <img className="thumb" alt="thumb post" src="assets/img/thumbs/adhd.jpg" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/adhd" className="link">Attention Deficit Hyperactive Disorder</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <Link to="/expertise/learndisabilities">
                        <img className="thumb" alt="thumb post" src="assets/img/replace/pic_blog.png" />
                      </Link>
                    </div>
                    <div className="span2">
                      <Link to="/expertise/learndisabilities" className="link">Learning Disabilities</Link>
                    </div>
                  </div>
                </li>
              </ul>

            </div>

          </div>
        </div>
      </div>
  }
});