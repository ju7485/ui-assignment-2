// Task 4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and calculates the average of the squares of all odd numbers in the array.

function averageOfSquaredOddNumbers(arr) {
    let oddNumbers = arr.filter((num) => num % 2 !== 0);
    let squaredOddNumbers = oddNumbers.map((num) => num ** 2);
    let sum = squaredOddNumbers.reduce((acc, num) => acc + num, 0);
    return sum / squaredOddNumbers.length;
}

console.log(averageOfSquaredOddNumbers([1, 2, 3, 4, 5]));
console.log(averageOfSquaredOddNumbers([2, 3, 4, 5, 6]));
