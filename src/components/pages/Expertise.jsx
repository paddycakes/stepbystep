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
  content: "Self-confidence is about trusting your own judgement and feeling comfortable with your abilities and powers. It is the means to realise your full potential and be the person you want to be. Self-confidence allows you to feel secure in the world and allows others to feel safe that they know what to expect of you. It is made up of a variety of factors, including how you present yourself physically to the world and how you relate to other people.\n\nSound self-confidence can bring benefits to all areas of your life, including relationships, career, social life and state of mind. Some people are self-confident in their work-life but not in their social life, we all differ. People feel comfortable with confident people as they are usually predictable and their behaviour is reliable.\n\n"
}, {
  id: "lowselfesteem",
  title: "Low Self Esteem",
  imageUrl: "lowselfesteem.jpg",
  content: "Self–esteem is how you think and feel about yourself; this may be positive, negative or move between the two points. This usually dictates how you live your life and the decisions you make – and how you view others too.\n\nThe more positive feelings you have about yourself, the higher your self-esteem is; the more negative feelings you have the lower your self-esteem is. Our materialist world, where people continually compare themselves with those around them, highlights our insecurities and often leads us to feel negative about ourselves and the way we live. We lose sight of the value of our own individuality and then feel inadequate and unsatisfied. It can become an enduring personality trait.\n\nWorking to improve your self-esteem takes time and effort. It requires courage and honesty to confront the things in yourself you don’t like but long-term it is a worthwhile task which should help you to feel better about yourself and your life.\n\n"
}, {
  id: "ocd",
  title: "Obsessive Compulsive Behaviour",
  imageUrl: "default.jpg",
  content: "People whose lives are dominated by compulsive hand-washing or having to re-check the locks in their home often suffer from Obsessive Compulsive Disorder. It usually involves obsessions (intrusive thoughts or impulses) and compulsions (repeated behaviours) such as washing, checking or counting to counteract them.\n\nThe repetition usually brings no pleasure, as addictive behaviours do, and is usually seen as irrational to the sufferer. Often it is an exhausting way of managing a fear and can be secretive.\n\n"
}, {
  id: "angermgmt",
  title: "Anger Management",
  imageUrl: "angermanagement.jpg",
  content: "Anger is a basic emotion which has allowed us to survive as a species. When a baby screams because it is hungry, too hot or too cold, it is displaying its raw anger. Anger is the emotion of not having our needs met. We are programmed with the ability to express our anger from birth – and then it gets complicated.\n\nAlthough it is a healthy, normal emotion it is probably also the most complex. It can be a creative force for change or to right an injustice.\n\nSocieties and families hold different views on how it can be used and by whom. It is often poorly managed and can be destructive when it is out of control and turns to aggression.\n\nIf anger cannot be expressed it can lead to physical problems, depression and anxiety and can cause relationships to wither.\n\nAnger, like all the emotions, involves physiological and chemical changes in the body. Heart rates and adrenaline levels are affected as the body experiences anger. For some people these surges can become addictive and destructive. There is a fine line between acknowledging anger and venting it until it is out of control.\n\n"
}, {
  id: "domviolence",
  title: "Domestic Violence",
  imageUrl: "domesticviolence.jpg",
  content: "Domestic violence, or domestic abuse, is a pattern of abusive behaviour by one or both people in a relationship. It can be any form of close relationship, such as marriage, family, friends or cohabitants. There are many different forms the abuse can take, including physical, verbal, psychological, sexual, emotional, threatening, intimidating or involve deprivation.\n\nThe government defines domestic violence as ‘any incident of threatening behaviour, violence or abuse (psychological, physical, sexual, financial or emotional) between adults who are or have been intimate partners, or family members, regardless of gender of sexuality’. The abuse may stem from the abuser’s need to be in control, asserting excessive and unnecessary authority in therelationship. The most common victims of domestic violence are women and children, and the most common abusers are men.\n\n"
}, {
  id: "passaggbehaviour",
  title: "Passive Aggressive Behaviour",
  imageUrl: "default.jpg",
  content: "We've all heard the phrase in books and films before, but what does it really mean to be 'passive aggressive'?\n\nWe often give this name to people who are particularly difficult, stubborn, unreasonable, or 'tight-lipped'. These people try hard to keep their real feelings inside but end up revealing them in subtle, under-hand but often far more destructive ways. Sometimes this can be accidental but more often than not, passive aggression is a perfectly intentional form of behaviour.\n\n"
}, {
  id: "ptsd",
  title: "Post Traumatic Stress Disorder",
  imageUrl: "ptsd.jpg",
  content: "When terrible things happen like accidents and natural disasters, individuals react in different ways and have diverse perceptions of the incident and events. Responses can change as their symptoms heighten or the impact lessens. PTSD, and related symptoms, is one of the responses that happen to some people.\n\nAfter a traumatic incident, individuals may keep ruminating over the event again and again so that it takes up valuable thinking time. It is as if the mind has been temporarily taken over with no headspace for normal daily function. They may experience a sense of overwhelming fear, intrusive images, thoughts, colours, smells and memories connected with the incident. Avoidance plays a part with some people – carefully avoiding talking, thinking or allowing triggers into their life to remind them of the trauma. This acts as a short-term safety mechanism but can lead to isolation from others. This can lead to ruptured relationships while the individual stays trapped with a sense of numbness and prolonged shock. Having a continuous startled response is another common symptom causing the individual to jump at every noise or sound.\n\nOften individuals trapped in this way may seem as if their personality has changed, as they become irritable, have bouts of increased moodiness and episodes of ‘flying off the handle’. An inability to sleep properly or waking up regularly in the early hours may affect concentration and memory. All symptoms are normal reactions to an abnormal situation; it is the body’s responsefor keeping the individual safe from further danger, a primeval instinct, more profound and highly developed than any of us give it credit for.\n\n"
}, {
  id: "childrelissues",
  title: "Child Related Issues",
  imageUrl: "childrelatedissues.jpg",
  content: "Sometimes children and young people (and their families) may need extra support if they are finding it difficult to deal with or understand their emotions and/or behaviour. Schools often provide professionals to help young people and their families, such as learning or behaviour mentors, family liaison officers or professionals from external services. However some childrenand young people, or their families, may decide to seek further help in the form of counselling.\n\n"
}, {
  id: "adhd",
  title: "Attention Deficit Hyperactive Disorder",
  imageUrl: "adhd.jpg",
  content: "Attention Deficit Hyperactive Disorder or ADHD, as it is often known, is a neurobehavioral developmental disorder. It is made up of three main strands, inattention, hyperactivity and impulsivity. This causes attention problems and can prevent and cause problems with learning and socialising.\n\nSymptoms generally present themselves after eighteen months and before seven years, and must continue for more than six months. In some cases, ADHD continues into adulthood. There is also debate as to whether ADHD can be diagnosed later in life.\n\nIn children, ADHD must be diagnosed by a doctor, child psychiatrist or paediatrician. ADHD overlaps with conditions like dyslexia, OCD and Asperger’s Syndrome.\n\n"
}, {
  id: "learndisabilities",
  title: "Learning Disabilities",
  imageUrl: "default.jpg",
  content: "A state of arrested or incomplete development of mind.\n\nSignificant impairment of intellectual functioning.\n\nSignificant impairment of adaptive/social functioning.\n\n"
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