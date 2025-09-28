class Bird {
  fly() {
    return `Flying...`;
  }
}
class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`; // This is the Polymorphism, overwirghs a behaviour set earlier
  }
}

class Sparrow extends Bird {}

let bird = new Bird();
let penguin = new Penguin();
let sparrow = new Sparrow();

console.log(bird.fly());
console.log(penguin.fly());
console.log(sparrow.fly());
