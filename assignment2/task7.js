// Task 7: Use filter to find all students who passed the exam.
// Write a JavaScript function that takes an array of student objects (with properties name and score) as input and returns an array containing only the students who passed the exam (scored 60 or above).

function passedStudents(students) {
    return students.filter((student) => student.score >= 60);
}

const students = [
    { name: 'Urvik', score: 50 },
    { name: 'Ju', score: 60 },
    { name: 'Whoju', score: 70 },
    { name: 'Alice', score: 80 },
    { name: 'Bob', score: 90 },
];

console.log(passedStudents(students));
