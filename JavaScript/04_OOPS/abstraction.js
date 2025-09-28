class CoffeeMachine {
  start() {
    // Call DB
    // Water volume
    return `Starting the Machine...`;
  }
  brewCoffee() {
    // Complex Calculation of water and coffee
    return `Brewing Coffee`;
  }
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne}, ${msgTwo}`;
  }
}
let myMachine = new CoffeeMachine();
console.log(myMachine.pressStartButton());
