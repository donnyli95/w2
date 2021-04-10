class Person {
  constructor(personName, personFact) {
    this.name = personName;
    this.quirkFact = personFact
  }

  bio() {
    return `I'm a student at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkFact}`
  }
}

class Student extends Person {
  enroll(cohortName) {
    this.cohort = cohortName;
  }

}

class Mentor extends Person {

  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }

  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}

let student1 = new Student('Donny', "I like cheese");
console.log(student1);
console.log(student1.bio());


let mentor1 = new Mentor("BunBun", "I like rice");
console.log(mentor1);
console.log(mentor1.bio());
