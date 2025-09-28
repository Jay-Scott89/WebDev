// Encaosulation, Inheritance, Polymorphism and Abstraction
let car = {
  make: "Ford",
  model: "Focus",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John", 20);
console.log(john);

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} make a sound`;
};

Array.prototype.jamie = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.jamie());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.modle} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an inheritance example`;
  }
}
let myCar = new Car("Ford", "Focus");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make);
