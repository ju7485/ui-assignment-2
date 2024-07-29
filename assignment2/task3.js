// Task 3: Use filter to find all prime numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the prime numbers.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num) + 1; i++) {
        if (num % i === 0 && i != num) return false;
    }
    return true;
}

function primeArray(arr) {
    return arr.filter((num) => isPrime(num));
}

console.log(primeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(primeArray([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));
