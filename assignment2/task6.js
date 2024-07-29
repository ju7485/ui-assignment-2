// Task 6: Use map to capitalize the first letter of each word in a sentence.
// Write a JavaScript function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

function capitalizeSentence(sentence) {
    return sentence.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeSentence('hello world'));
console.log(capitalizeSentence('hey there, how are you?'));

