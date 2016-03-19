var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <div id="blog_wrapper">
      <div className="container">
        <div className="row">

          <div className="span8">

            <h1 className="header">
              About Me
              <hr/>
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
                      <a href="anxiety.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/anxiety-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="anxiety.html">Anxiety</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="depression.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/depression-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="depression.html">Depression</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="relmediation.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/relationship-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="relmediation.html">Relationship Mediation</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="stress.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/stress-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="stress.html">Stress</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="lowselfconf.html">
                        <img className="thumb" alt="thumb post" src="img/pic_blog.png" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="lowselfconf.html">Low Self Confidence</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="lowselfesteem.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/lowselfesteem-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="lowselfesteem.html">Low Self Esteem</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="ocd.html">
                        <img className="thumb" alt="thumb post" src="img/pic_blog.png" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="ocd.html">Obsessive Compulsive Behavior</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="angermgmt.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/angermanagement-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="angermgmt.html">Anger Management</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="domviolence.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/domesticviolence-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="domviolence.html">Domestic Violence</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="passaggbehaviour.html">
                        <img className="thumb" alt="thumb post" src="img/pic_blog.png" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="passaggbehaviour.html">Passive Aggressive Behavior</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="ptsd.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/posttraumatic-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="ptsd.html">Post Traumatic Stress Disorder</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="childrelissues.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/childrelatedissues-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="childrelissues.html">Child Related Issues</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="adhd.html">
                        <img className="thumb" alt="thumb post" src="img/thumbs/adhd-shs.jpg" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="adhd.html">Attention Deficit Hyperactive Disorder</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="span1">
                      <a href="learndisabilities.html">
                        <img className="thumb" alt="thumb post" src="img/pic_blog.png" />
                      </a>
                    </div>
                    <div className="span2">
                      <a className="link" href="learndisabilities.html">Learning Disabilities</a>
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