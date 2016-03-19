var React = require('react');
var _ = require('lodash');
var Service = require('../services/Service');

// TODO: Is this exactly the same as Services?
// TODO: Need to dynamically load content to pass into Service component
// TODO: Get service name from url

// TODO: Load via Firebase
var expertises = [{
  id: "anxiety",
  title: "Anxiety",
  imageUrl: "anxiety.jpg",
  content: "Anxiety is a simplistic blanket term which covers a wide range of problems from the temporary effects of stress to panic attacks, compulsions, phobias or debilitating nervous illness previously known as ‘nervous breakdown’. Common in all these complaints is the overwhelming effect of the body producing too much adrenaline resulting in physical symptoms which affect daily life.\n\nThe apprehension of anxiety, which causes palpitations and shaking, results in the production of even more adrenaline, resulting in a vicious circle. For some people anxiety is a temporary state which passes when the source of stress subsides, while for others it becomes a long-term condition which affects their lives and those of their loves ones.\n\nIt is normal and healthy to feel sad or worried about life and its problems and pressures. But when worry casts a cloud over everyday life you may be suffering from anxiety or depression or a mixture of the two.\n\nA quarter of the population will suffer from anxiety at some time in their lives - even more than those affected by depression. It is the major reason for absence from work. The fear-adrenaline-fear cycle, if unbroken, eventually brings about a state of stress and extreme fatigue.\n\n"
}, {
  id: "depression",
  title: "Depression",
  imageUrl: "depression.jpg",
  content: "Depression is a common condition that will affect one in three people at some time in their life. It is a complicated illness with many different symptoms and causes.</p> <p>Changes in eating habits and sleeping patterns and overwhelming feelings of despair are often the first signs of depression.\n\nMany sufferers become emotionally detached from those around them and withdraw into a world of their own. Some describe it like being in a prison with no windows or doors, which can alienate friends and relatives, increasing the isolation.\n\n"
}, {
  id: "anxiety",
  title: "Anxiety",
  imageUrl: "anxiety.jpg",
  content: "Anxiety is a simplistic blanket term which covers a wide range of problems from the temporary effects of stress to panic attacks, compulsions, phobias or debilitating nervous illness previously known as ‘nervous breakdown’. Common in all these complaints is the overwhelming effect of the body producing too much adrenaline resulting in physical symptoms which affect daily life.\n\nThe apprehension of anxiety, which causes palpitations and shaking, results in the production of even more adrenaline, resulting in a vicious circle. For some people anxiety is a temporary state which passes when the source of stress subsides, while for others it becomes a long-term condition which affects their lives and those of their loves ones.\n\nIt is normal and healthy to feel sad or worried about life and its problems and pressures. But when worry casts a cloud over everyday life you may be suffering from anxiety or depression or a mixture of the two.\n\nA quarter of the population will suffer from anxiety at some time in their lives - even more than those affected by depression. It is the major reason for absence from work. The fear-adrenaline-fear cycle, if unbroken, eventually brings about a state of stress and extreme fatigue.\n\n"
}, {
  id: "anxiety",
  title: "Anxiety",
  imageUrl: "anxiety.jpg",
  content: "Anxiety is a simplistic blanket term which covers a wide range of problems from the temporary effects of stress to panic attacks, compulsions, phobias or debilitating nervous illness previously known as ‘nervous breakdown’. Common in all these complaints is the overwhelming effect of the body producing too much adrenaline resulting in physical symptoms which affect daily life.\n\nThe apprehension of anxiety, which causes palpitations and shaking, results in the production of even more adrenaline, resulting in a vicious circle. For some people anxiety is a temporary state which passes when the source of stress subsides, while for others it becomes a long-term condition which affects their lives and those of their loves ones.\n\nIt is normal and healthy to feel sad or worried about life and its problems and pressures. But when worry casts a cloud over everyday life you may be suffering from anxiety or depression or a mixture of the two.\n\nA quarter of the population will suffer from anxiety at some time in their lives - even more than those affected by depression. It is the major reason for absence from work. The fear-adrenaline-fear cycle, if unbroken, eventually brings about a state of stress and extreme fatigue.\n\n"
}]

module.exports = React.createClass({
  getExpertise: function(expertiseId) {
    return _.find(expertises, function(exp) {
      return exp.id == expertiseId;
    });
  },

  render: function () {
    // TODO: Use this value to load the correct service via Firebase
    var expertiseId = this.props.params.expertiseId;
    var expertise = this.getExpertise(expertiseId);
    // TODO: Check that expertise actually has a value or else will be an (unrecoverable?) error
    console.log("Expertise is " + expertise);

    return <Service {...expertise} />
  }
});