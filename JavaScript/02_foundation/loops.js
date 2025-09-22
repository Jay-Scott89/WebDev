/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0;
let i = 0;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(`1. ${sum}`);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(`2. ${countdown}`);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

// Must be run in the browser console
/* let teaCollection = [];
let tea;
do {
  tea = prompt(`Enter your favourite tea (type "stop to finish)`);
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop"); */

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(`4. ${total}`);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];
for (let l = 0; l < numbers.length; l++) {
  let takenNumber = numbers[l] * 2;
  multipliedNumbers.push(takenNumber);

  // multipliedNumbers.push(numbers[l] * 2); Alternate way to write the same line
}
console.log(`5. ${multipliedNumbers} `);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let i = 0; i < cities.length; i++) {
  const myCity = cities[i];
  cityList.push(myCity);
}
console.log(`6. ${cityList}`);

// Higher Level Challenges
/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
console.log(`1. ${selectedTeas}`);

/*
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
   Store the other cities in a new array named `visitedCities`.
*/

let newCities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < newCities.length; i++) {
  if (newCities[i] === "Paris") {
    continue;
  }
  visitedCities.push(newCities[i]);
}
console.log(`2. ${visitedCities}`);

/*
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
   Store the numbers before `4` in an array named `smallNumbers`.
*/

nums = [1, 2, 3, 4, 5];
smallNumbers = [];
for (const n of nums) {
  if (n === 4) {
    break;
  }
  smallNumbers.push(n);
}
console.log(`3. ${smallNumbers}`);

/*
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`.
   Store the other teas in an array named `preferredTeas`.
*/

teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const t of teas) {
  if (t === "herbal tea") {
    continue;
  }
  preferredTeas.push(t);
}
console.log(`4. ${preferredTeas}`);

/*
5. Use a `for-in` loop to loop through an object containing city populations.
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityPopulations = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityPopulations[city] = citiesPopulation[city];
}
console.log("5.", cityPopulations);
/*
6. Use a `for-in` loop to loop through an object containing city populations.
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log("6.", largeCities);

/*
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

teas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teas.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(`7. ${availableTeas}`);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
cities.forEach(function (city) {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(`8. ${traveledCities}`);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

numbers = [2, 5, 7, 9];
let doubleNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    continue;
  }
  doubleNumbers.push(numbers[i] * 2);
}
console.log(`9. ${doubleNumbers}`);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let newTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of newTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(`10. ${shortTeas}`);
