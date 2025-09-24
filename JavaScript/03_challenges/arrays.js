/* Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array */
function filterNumbers(arr) {
  return arr.filter((x) => typeof x === "number");
}

/* Task 2: Array Reversal
Write a function reverseArray(arr) that reverses the array */
function reverseArray(arr) {
  return arr.reverse();
}

/* Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array */
function findMax(arr) {
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
  return max;
}

/* Task 4: Remove Duplicates from an Array
Write a function removeDuplicates(arr) that returns a new array with all duplicates removed */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/* Task 5: Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array and returns a single flattened array */
function flattenArray(arr) {
  return arr.flat(Infinity);
}
