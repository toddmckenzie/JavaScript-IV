// CODE here for your Lambda Classes
class Person {
  constructor(personAttrs){
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.gender = personAttrs.gender;
  }
  speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}


class Instructor extends Person {
  constructor(instructorAttrs){
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student} recives a perfect score on ${subject}`
  }
  ranAddorSub(student) {
    let sign, pointsAddOrSub;
    pointsAddOrSub = Math.floor((Math.random()) * 10); // can be between 0 and 9 points
    (Math.random() < .5)? sign = '+': sign = '-'; //will either be added or subtracted based on sign.
    (sign === '+')? student.grade += pointsAddOrSub: student.grade -= pointsAddOrSub;
    return `${student.name} now has this grade ${student.grade}`
  }
}


class Student extends Person {
  constructor (studentAttrs){
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = studentAttrs.grade; //grade added
  }
  listSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`  //??
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}` //??
  }
  graduate(){
    return (this.grade > 70)?`${this.name} has graduated from Lambda with a score of ${this.grade}`: `${this.name} does not have a high enough score to graduate from Lambda with a score of ${this.grade}`
  }
}


class ProjectManager extends Instructor {
  constructor(pmAttrs){
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInsructor = pmAttrs.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}'`
  }
}


const barney = new Instructor ({
  name: 'Barney',
  location: 'KC',
  age: 40,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Data science',
  catchPhrase: 'I be where I be'
});


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const jill = new Instructor ({
  name: 'Jill',
  location: 'New York',
  age: 32,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-End',
  catchPhrase: 'Books are the key to success'
});


const todd = new Student ({
  name: 'Todd',
  age: 39,
  location: 'St. Louis',
  gender: 'male',
  className: 'Web19',
  previousBackground: 'Chemical Operator',
  favSubjects: ['HTML', 'JavaScript', 'Python'],
  grade: 60
})

const sarah  = new Student ({
  name: 'Sarah',
  age: 24,
  location: 'L.A.',
  gender: 'female',
  className: 'Web15',
  previousBackground: 'College Student',
  favSubjects: ['Java', 'Python'],
  grade: 85
})

const norah = new Student ({
  name: 'Norah',
  age: 20,
  location: 'Ft. Myers',
  gender: 'female',
  className: 'Web18',
  previousBackground: 'Waitress',
  favSubjects: ['Css', 'HTML', 'Python'],
  grade: 75
})


const tim = new ProjectManager ({
  name: 'Tim',
  age: 45,
  location: 'Dallas',
  gender: 'male',
  gradClassName: 'Web4',
  favInstructor: 'Jill'
})

const dave = new ProjectManager ({
  name: 'Dave',
  age: 55,
  location: 'Belleville',
  gender: 'male',
  gradClassName: 'Web2',
  favInstructor: 'Barney'
})

const jamie = new ProjectManager ({
  name: 'Jamie',
  age: 29,
  location: 'Pittsburgh',
  gender: 'female',
  gradClassName: 'Web10',
  favInstructor: 'fred'
})

//testing students console.logs//
console.log(todd)
console.log(todd.speak())
todd.listSubjects()  //not console.log because method does that.
console.log(todd.PRAssignment('JavaScript-IV'));
console.log(norah.sprintChallenge('Css'));
console.log(sarah)
sarah.listSubjects(); //not console.log because method does that
norah.listSubjects(); //not console.log because method does that
console.log(norah.speak())

//testing Instructors
console.log(fred);
console.log(fred.speak());
console.log(jill.demo('HTML'));
console.log(fred.grade('Sarah', 'JavaScript' ))
console.log(barney.catchPhrase)

//testing pm

console.log(jamie.speak());
console.log(dave);
console.log(tim.standUp('zoom11423'));

console.log(fred.ranAddorSub(todd)); //teacher randomly taking or giving points....
console.log(fred.ranAddorSub(todd));
console.log(fred.ranAddorSub(todd));
console.log(fred.ranAddorSub(todd));

console.log(jamie.debugsCode(todd, 'HTML'));

console.log(jamie.grade('Sarah', 'JavaScript' ));
console.log(jamie.ranAddorSub(norah)) //PM's able to use to random add or subtract students scores... inherited
console.log(tim.ranAddorSub(sarah)); //from instructors.....
console.log(dave.ranAddorSub(sarah));


console.log(todd.graduate());
console.log(sarah.graduate());
console.log(norah.graduate());
