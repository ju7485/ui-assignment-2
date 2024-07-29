// Task 1: Use map to convert an array of numbers into an array of their cubes.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing the cubes of each number.

function cubeArray(arr) {
    return arr.map((num) => num ** 3);
}

console.log(cubeArray([1, 2, 3, 4, 5]));
console.log(cubeArray([2, 3, 4, 5, 6]));
