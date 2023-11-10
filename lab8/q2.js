function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
  }
  
  Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
  };
  
  Student.prototype.computeAverage = function () {
    if (this.grades.length === 0) {
      return 0;
    }
    return this.grades.reduce(
      (avgGrade, grade) => avgGrade + grade / this.grades.length,
      0
    );
  };
  
  const student1 = new Student("John", "Doe", [98, 88, 97, 68, 88]);
  // student1.grades = [98,88,97,68,88];
  student1.inputNewGrade(99);
  student1.inputNewGrade(89);
  student1.inputNewGrade(79);
  student1.inputNewGrade(69);
  student1.inputNewGrade(59);
  console.log(
    `${student1.firstName} ${
      student1.lastName
    } Average Grade: ${student1.computeAverage()}`
  );