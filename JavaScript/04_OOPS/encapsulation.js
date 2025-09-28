class BankAccount {
  #balance = 0; // This is encapsulation. No one outside the class can access this.
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `£ ${this.#balance}`;
  }
}
let account = new BankAccount();
