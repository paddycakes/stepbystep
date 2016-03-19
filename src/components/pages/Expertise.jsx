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
  content: "Depression is a common condition that will affect one in three people at some time in their life. It is a complicated illness with many different symptoms and causes.\n\nChanges in eating habits and sleeping patterns and overwhelming feelings of despair are often the first signs of depression.\n\nMany sufferers become emotionally detached from those around them and withdraw into a world of their own. Some describe it like being in a prison with no windows or doors, which can alienate friends and relatives, increasing the isolation.\n\n"
}, {
  id: "relmediation",
  title: "Relationship Mediation",
  imageUrl: "relationship.jpg",
  content: "Couples Counselling, previously known as marital therapy or marriage guidance, addresses the problems arising from adult sexual or intimate relationships. The relationship, rather than the two individuals, is the 'client'.\n\nOur very closest relationship: a marriage; co-habitation or civil partnership, is based on intimacy and trust. When it stops working we are affected deeply and our health and happiness suffer. Our sense of identity and self-worth often rests on the strength of our relationships and we can despair when our prime relationship fails.\n\nPressures of work, family, money and health all take their toll. Suddenly the relationship that once recharged us leaves us drained and disappointed.\n\nPatterns of behaving that we learned as children often re-emerge in our adult relationship. A childhood 'scapegoat' may start to feel blamed for everything by the partner who once adored them.\n\n"
}, {
  id: "stress",
  title: "Stress",
  imageUrl: "stress.jpg",
  content: "Stress is the pressure under which you are placed by daily life. It can be positive and spur you into action to meet a deadline; but too much stress can put your health at risk and leave you unable to function. It is the second major cause of illness at work, after back problems.\n\nAnxiety and depression, the most common forms of mental illness, are often caused by stress.\n\nIn an emergency the stress chemicals (cortisol, adrenaline and noradrenaline) give us a surge of energy to flee from danger or fight for survival. When we are immobile, in the office, at home or in the car, these chemicals can build up in our bodies, raising blood pressure, affecting the heart and damaging the immune system.Stress is an individual problem – what debilitates one person will be invigorating to another.\n\nThere are two main types of stress: the constant 'drip' of everyday pressure such as deadlines, bills and errands and the 'gushes' of loss and life changes, such as bereavement, divorce, new job, house move and marriage.\n\n"
}, {
  id: "lowselfconf",
  title: "Low Self Confidence",
  imageUrl: "default.jpg",
  content: "Anxiety is a simplistic blanket term which covers a wide range of problems from the temporary effects of stress to panic attacks, compulsions, phobias or debilitating nervous illness previously known as ‘nervous breakdown’. Common in all these complaints is the overwhelming effect of the body producing too much adrenaline resulting in physical symptoms which affect daily life.\n\nThe apprehension of anxiety, which causes palpitations and shaking, results in the production of even more adrenaline, resulting in a vicious circle. For some people anxiety is a temporary state which passes when the source of stress subsides, while for others it becomes a long-term condition which affects their lives and those of their loves ones.\n\nIt is normal and healthy to feel sad or worried about life and its problems and pressures. But when worry casts a cloud over everyday life you may be suffering from anxiety or depression or a mixture of the two.\n\nA quarter of the population will suffer from anxiety at some time in their lives - even more than those affected by depression. It is the major reason for absence from work. The fear-adrenaline-fear cycle, if unbroken, eventually brings about a state of stress and extreme fatigue.\n\n"
}, {
  id: "lowselfesteem",
  title: "Low Self Esteem",
  imageUrl: "lowselfesteem.jpg",
  content: "Depression is a common condition that will affect one in three people at some time in their life. It is a complicated illness with many different symptoms and causes.\n\nChanges in eating habits and sleeping patterns and overwhelming feelings of despair are often the first signs of depression.\n\nMany sufferers become emotionally detached from those around them and withdraw into a world of their own. Some describe it like being in a prison with no windows or doors, which can alienate friends and relatives, increasing the isolation.\n\n"
}, {
  id: "ocd",
  title: "Obsessive Compulsive Behaviour",
  imageUrl: "default.jpg",
  content: "Couples Counselling, previously known as marital therapy or marriage guidance, addresses the problems arising from adult sexual or intimate relationships. The relationship, rather than the two individuals, is the 'client'.\n\nOur very closest relationship: a marriage; co-habitation or civil partnership, is based on intimacy and trust. When it stops working we are affected deeply and our health and happiness suffer. Our sense of identity and self-worth often rests on the strength of our relationships and we can despair when our prime relationship fails.\n\nPressures of work, family, money and health all take their toll. Suddenly the relationship that once recharged us leaves us drained and disappointed.\n\nPatterns of behaving that we learned as children often re-emerge in our adult relationship. A childhood 'scapegoat' may start to feel blamed for everything by the partner who once adored them.\n\n"
}, {
  id: "angermgmt",
  title: "Anger Management",
  imageUrl: "angermanagement.jpg",
  content: "Stress is the pressure under which you are placed by daily life. It can be positive and spur you into action to meet a deadline; but too much stress can put your health at risk and leave you unable to function. It is the second major cause of illness at work, after back problems.\n\nAnxiety and depression, the most common forms of mental illness, are often caused by stress.\n\nIn an emergency the stress chemicals (cortisol, adrenaline and noradrenaline) give us a surge of energy to flee from danger or fight for survival. When we are immobile, in the office, at home or in the car, these chemicals can build up in our bodies, raising blood pressure, affecting the heart and damaging the immune system.Stress is an individual problem – what debilitates one person will be invigorating to another.\n\nThere are two main types of stress: the constant 'drip' of everyday pressure such as deadlines, bills and errands and the 'gushes' of loss and life changes, such as bereavement, divorce, new job, house move and marriage.\n\n"
}, {
  id: "domviolence",
  title: "Domestic Violence",
  imageUrl: "domesticviolence.jpg",
  content: "Anxiety is a simplistic blanket term which covers a wide range of problems from the temporary effects of stress to panic attacks, compulsions, phobias or debilitating nervous illness previously known as ‘nervous breakdown’. Common in all these complaints is the overwhelming effect of the body producing too much adrenaline resulting in physical symptoms which affect daily life.\n\nThe apprehension of anxiety, which causes palpitations and shaking, results in the production of even more adrenaline, resulting in a vicious circle. For some people anxiety is a temporary state which passes when the source of stress subsides, while for others it becomes a long-term condition which affects their lives and those of their loves ones.\n\nIt is normal and healthy to feel sad or worried about life and its problems and pressures. But when worry casts a cloud over everyday life you may be suffering from anxiety or depression or a mixture of the two.\n\nA quarter of the population will suffer from anxiety at some time in their lives - even more than those affected by depression. It is the major reason for absence from work. The fear-adrenaline-fear cycle, if unbroken, eventually brings about a state of stress and extreme fatigue.\n\n"
}, {
  id: "passaggbehaviour",
  title: "Passive Aggressive Behaviour",
  imageUrl: "default.jpg",
  content: "Depression is a common condition that will affect one in three people at some time in their life. It is a complicated illness with many different symptoms and causes.\n\nChanges in eating habits and sleeping patterns and overwhelming feelings of despair are often the first signs of depression.\n\nMany sufferers become emotionally detached from those around them and withdraw into a world of their own. Some describe it like being in a prison with no windows or doors, which can alienate friends and relatives, increasing the isolation.\n\n"
}, {
  id: "ptsd",
  title: "Post Traumatic Stress Disorder",
  imageUrl: "ptsd.jpg",
  content: "Couples Counselling, previously known as marital therapy or marriage guidance, addresses the problems arising from adult sexual or intimate relationships. The relationship, rather than the two individuals, is the 'client'.\n\nOur very closest relationship: a marriage; co-habitation or civil partnership, is based on intimacy and trust. When it stops working we are affected deeply and our health and happiness suffer. Our sense of identity and self-worth often rests on the strength of our relationships and we can despair when our prime relationship fails.\n\nPressures of work, family, money and health all take their toll. Suddenly the relationship that once recharged us leaves us drained and disappointed.\n\nPatterns of behaving that we learned as children often re-emerge in our adult relationship. A childhood 'scapegoat' may start to feel blamed for everything by the partner who once adored them.\n\n"
}, {
  id: "childrelissues",
  title: "Child Related Issues",
  imageUrl: "childrelatedissues.jpg",
  content: "Stress is the pressure under which you are placed by daily life. It can be positive and spur you into action to meet a deadline; but too much stress can put your health at risk and leave you unable to function. It is the second major cause of illness at work, after back problems.\n\nAnxiety and depression, the most common forms of mental illness, are often caused by stress.\n\nIn an emergency the stress chemicals (cortisol, adrenaline and noradrenaline) give us a surge of energy to flee from danger or fight for survival. When we are immobile, in the office, at home or in the car, these chemicals can build up in our bodies, raising blood pressure, affecting the heart and damaging the immune system.Stress is an individual problem – what debilitates one person will be invigorating to another.\n\nThere are two main types of stress: the constant 'drip' of everyday pressure such as deadlines, bills and errands and the 'gushes' of loss and life changes, such as bereavement, divorce, new job, house move and marriage.\n\n"
}, {
  id: "adhd",
  title: "Attention Deficit Hyperactive Disorder",
  imageUrl: "adhd.jpg",
  content: "Couples Counselling, previously known as marital therapy or marriage guidance, addresses the problems arising from adult sexual or intimate relationships. The relationship, rather than the two individuals, is the 'client'.\n\nOur very closest relationship: a marriage; co-habitation or civil partnership, is based on intimacy and trust. When it stops working we are affected deeply and our health and happiness suffer. Our sense of identity and self-worth often rests on the strength of our relationships and we can despair when our prime relationship fails.\n\nPressures of work, family, money and health all take their toll. Suddenly the relationship that once recharged us leaves us drained and disappointed.\n\nPatterns of behaving that we learned as children often re-emerge in our adult relationship. A childhood 'scapegoat' may start to feel blamed for everything by the partner who once adored them.\n\n"
}, {
  id: "learndisabilities",
  title: "Learning Disabilities",
  imageUrl: "default.jpg",
  content: "Stress is the pressure under which you are placed by daily life. It can be positive and spur you into action to meet a deadline; but too much stress can put your health at risk and leave you unable to function. It is the second major cause of illness at work, after back problems.\n\nAnxiety and depression, the most common forms of mental illness, are often caused by stress.\n\nIn an emergency the stress chemicals (cortisol, adrenaline and noradrenaline) give us a surge of energy to flee from danger or fight for survival. When we are immobile, in the office, at home or in the car, these chemicals can build up in our bodies, raising blood pressure, affecting the heart and damaging the immune system.Stress is an individual problem – what debilitates one person will be invigorating to another.\n\nThere are two main types of stress: the constant 'drip' of everyday pressure such as deadlines, bills and errands and the 'gushes' of loss and life changes, such as bereavement, divorce, new job, house move and marriage.\n\n"
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