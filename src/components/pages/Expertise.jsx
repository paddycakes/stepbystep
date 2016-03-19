var React = require('react');
var Service = require('../services/Service');

// TODO: Is this exactly the same as Services?
// TODO: Need to dynamically load content to pass into Service component
// TODO: Get service name from url

var expertise = {
  id: "anxiety",
  title: "Anxiety",
  imageUrl: "anxiety.jpg",
  content: "<p>Anxiety is a simplistic blanket term which covers a wide range of problems from the temporary effects of stress to panic attacks, compulsions, phobias or debilitating nervous illness previously known as ‘nervous breakdown’. Common in all these complaints is the overwhelming effect of the body producing too much adrenaline resulting in physical symptoms which affect daily life.</p> <p>The apprehension of anxiety, which causes palpitations and shaking, results in the production of even more adrenaline, resulting in a vicious circle. For some people anxiety is a temporary state which passes when the source of stress subsides, while for others it becomes a long-term condition which affects their lives and those of their loves ones.</p> <p>It is normal and healthy to feel sad or worried about life and its problems and pressures. But when worry casts a cloud over everyday life you may be suffering from anxiety or depression or a mixture of the two.</p> <p>A quarter of the population will suffer from anxiety at some time in their lives - even more than those affected by depression. It is the major reason for absence from work. The fear-adrenaline-fear cycle, if unbroken, eventually brings about a state of stress and extreme fatigue.</p>"
}

module.exports = React.createClass({
  render: function () {
    // TODO: Use this value to load the correct service via Firebase
    var expertiseId = this.props.params.expertise;

    return <Service {...expertise} />
  }
});