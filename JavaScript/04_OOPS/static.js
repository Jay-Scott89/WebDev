class Calculator {
  static add(a, b) {
    // A static can only be called by the class. this is not a normal function.
    return a + b;
  }
}
console.log(Calculator.add(2, 3));
