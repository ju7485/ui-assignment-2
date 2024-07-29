// Task 2: Use reduce to find the sum of all elements in an array.
// Write a JavaScript function that takes an array of numbers as input and returns the sum of all elements.


function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}


console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([2, 3, 4, 5, 6]));
