// Task 8: Create a Private Counter for Multiple Instances
// Write a closure-based function that creates multiple instances of a private counter. Each instance should have its own count, independent of the others. For example:

// const counter1 = createInstanceCounter();
// const counter2 = createInstanceCounter();

// console.log(counter1()); // Output: 1
// console.log(counter1()); // Output: 2
// console.log(counter2()); // Output: 1
// console.log(counter2()); // Output: 2

// Hint: Use a closure to create a private variable that is shared by all instances of the counter function.

function createInstanceCounter() {
    let count = 0;
    return function() {
        return ++count;
    }
}

const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log("counter1: ", counter1());
console.log("counter1: ", counter1());
console.log("counter2: ", counter2());
console.log("counter2: ", counter2());
console.log("counter1: ", counter1());
console.log("counter2: ", counter2());

