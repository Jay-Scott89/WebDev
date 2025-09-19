const username = {
  firstName: "Jamie",
  isLoggedIn: true,
}; // The space of the object is reserved but the primitive values can still be changed
console.log(username.firstName);
console.log(typeof username);

username.firstName = "BigJay";
username.lastName = "Scottie";
console.log(username.firstName);
console.log(username);

let today = new Date();
console.log(today.getFullYear());

// Array
let heros = ["Superman", "Batman", "Wonder Woman"];
let user = ["Jamie", true];
console.log(user[0]);
