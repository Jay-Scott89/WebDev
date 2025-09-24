// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
  let sum = a + b;
  return sum;
}

// Subtract small value from larger one
function subtract() {
  let result = b - a;
  return result;
}

function multiply() {
  let result = a * b;
  return result;
}

// Divide larger value by small
function divide() {
  let result = b / a;
  return result;
}

// Increase value of a by 1
function increment() {
  let result = a;
  result++;
  return result;
}

// Decrease value of b by 1
function decrement() {
  let result = b;
  result--;
  return result;
}

// Divide larger value by small to find the reminder
function reminder() {
  let result = b % a;
  return result;
}
