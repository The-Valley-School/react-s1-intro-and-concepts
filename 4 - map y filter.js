// Map
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Filter
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Map and Filter
let words = ["Hello", "world", "!"];
let uppercaseWords = words
    .filter(word => word.length > 3)
    .map(word => word.toUpperCase());
console.log(uppercaseWords); // ["HELLO", "WORLD"]