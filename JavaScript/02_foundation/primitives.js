// Number
let balance = 120;
let otherBalance = new Number(120);

console.log(otherBalance);
console.log(otherBalance.valueOf());
console.log(typeof balance);

// Boolion
let firstName = null;
let lastName = undefined;
console.log(firstName);
console.log(lastName);

// String
let myString = "Hello";
let stringTwo = "Jamie";

// Old concatination of string
let greet = myString + " " + stringTwo;
console.log(greet);

// Backticks is an easier way to concatiate
let greetMessage = `Hello ${stringTwo} !`;
console.log(greetMessage);

// Symbol - generates a unique value. Often used as a unique property key that won't collide with another object
let sm1 = Symbol("Jamie");
let sm2 = Symbol("Jamie");
console.log(sm1 == sm2);
