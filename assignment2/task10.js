// Task 10: Calculate Total Score
// Write a JavaScript function that takes an array of objects, where each object contains a property score, and uses the forEach method to calculate the total score of all the objects in the array. Return the total score as the output.

function totalScore(arr) {
    let total = 0;
    arr.forEach((obj) => {
        total += obj.score;
    });
    return total;
}

const students = [
    { name: 'Urvik', score: 50 },
    { name: 'Ju', score: 60 },
    { name: 'Whoju', score: 70 },
    { name: 'Alice', score: 80 },
    { name: 'Bob', score: 90 },
];

console.log(totalScore(students));

