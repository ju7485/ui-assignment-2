// Task 5: Use map, reduce, and filter to find the longest string in an array of strings.
// Write a JavaScript function that takes an array of strings as input and returns the longest string from the array.

function longestString(arr) {
    return arr.reduce((acc, str) => {
        return str.length > acc.length ? str : acc;
    }, '');
}

console.log(longestString(['ju', 'urvik', 'urvikjada', 'whourvikjada']));