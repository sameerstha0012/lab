class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(studentAnswer) {
        return this.answer === studentAnswer;
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = new Map(questions.map(q => [q.qid, q.answer]));
        this.students = students;
    }

    scoreStudentBySid(studentId) {
        const student = this.students.find(s => s.studentId === studentId);

        if (!student) {
            return 0; // Student not found
        }

        return student.answers.reduce((score, studentAnswer) => {
            const correctAnswer = this.questions.get(studentAnswer.qid);
            return score + (correctAnswer === studentAnswer.answer ? 1 : 0);
        }, 0);
    }

    getAverageScore() {
        const totalScore = this.students.reduce((total, student) => {
            return total + this.scoreStudentBySid(student.studentId);
        }, 0);

        return this.students.length === 0 ? 0 : totalScore / this.students.length;
    }
}

// Example usage:
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b')
];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); // Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); // Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); // Expected Result: 2.5