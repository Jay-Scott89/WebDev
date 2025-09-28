/* Task: Prototype Chaining
Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
Then create another constructor Dog that inherits from Animal using prototypes.
The Dog constructor should add a method bark() that returns 'Woof!'. 
Demonstrate the prototype chain between Dog and Animal. */
function Animal() {}

Animal.prototype.speak = function () {
  return "Animal speaking";
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return "Woof!";
};

Dog.prototype.constructor = Dog;

/* Task 1: Create a Functional Constructor
Create a functional constructor Person that takes name and age as parameters. 
Add a method greet() to the constructor that returns "Hello, my name is [name]".

Task 2: Handle Errors
Modify the Person constructor to throw an error if the age is not a positive number. */
function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

/* Task 1: Class Inheritance
Create a class Vehicle with properties make and model, and a method getDetails() 
that returns a string "Make: [make], Model: [model]". Create a subclass Car that 
extends Vehicle and adds a method startEngine() that returns "Engine started".

Task 2: Method Overriding in Inheritance
Extend the Vehicle class from the previous task to include a method move() that 
returns "The vehicle is moving". Then, override the move() method in the Car 
class to return "The car is driving".

Task 3: Static Methods in Classes
Add a static method isVehicle(obj) to the Vehicle class that checks if a given 
object is an instance of Vehicle. The method should return true if the object 
is a Vehicle or a subclass of Vehicle, and false otherwise. */
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
    return `The vehicle is moving`;
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return `Engine started`;
  }
  move() {
    return `The car is driving`;
  }
}

/* Task 1: Encapsulation Using Getters and Setters
Create a class BankAccount with a private property _balance. Add methods 
deposit(amount) and withdraw(amount). Use getters and setters to access and 
modify the _balance while ensuring the balance never goes negative.

Task 2: Polymorphism with Method Overriding
Create a class Shape with a method area() that returns 0. Create two subclasses 
Circle and Rectangle that override the area() method to calculate the area of a 
circle and a rectangle, respectively. */
// Task 1
class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && this._balance - amount >= 0) {
      this._balance -= amount;
    } else {
      throw new Error("Balance cannot be negative");
    }
  }
}

// Task 2
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}
