function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  marks.forEach((item) => this.marks.push(item));
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  marks.forEach((item) => this.marks.push(item));
}

Student.prototype.getAverage = function () {
  let sum = this.marks.reduce((acc, item) => acc + item, 0);
  return Number((sum/this.marks.length).toFixed(1));
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}