// Task 9: Create a Promise-Based Calculator
// Write a Promise-based calculator that takes two numbers and an operation (addition, subtraction, multiplication, or division) as input. Perform the corresponding operation and resolve the Promise with the result. Handle division by zero and any invalid operations by rejecting the Promise with an appropriate error message.

function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (operation === 'addition') {
            resolve(num1 + num2);
        }
        else if (operation === 'subtraction') {
            resolve(num1 - num2);
        } 
        else if (operation === 'multiplication') {
            resolve(num1 * num2);
        } 
        else if (operation === 'division') {
            if (num2 === 0) {
                reject('Division by zero is not allowed');
            } 
            else {
                resolve(num1 / num2);
            }
        } 
        else {
            reject('Invalid operation');
        }
    });
}

calculator(5, 3, 'addition').then((result) => console.log("addition result :", result)).catch((error) => console.log("addition error :", error));
calculator(5, 3, 'subtraction').then((result) => console.log("subtraction result :", result)).catch((error) => console.log("subtraction error :", error));
calculator(5, 3, 'multiplication').then((result) => console.log("multiplication result :", result)).catch((error) => console.log("multiplication error :", error));
calculator(5, 3, 'division').then((result) => console.log("division result :", result)).catch((error) => console.log("division error :", error));
calculator(5, 0, 'division').then((result) => console.log("division result :", result)).catch((error) => console.log("division error :", error));
calculator(5, 3, 'modulus').then((result) => console.log("modulus result :", result)).catch((error) => console.log("modulus error :", error));



