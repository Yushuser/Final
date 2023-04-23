class BankAccount {
    constructor() {
      this.balance = 0;
    }
  
    async addMoney(amount) {
      this.balance += amount;
      console.log(`Added ${amount}, new balance is ${this.balance}`);
    }
  
    async takeMoney(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Taken ${amount}, new balance is ${this.balance}`);
      } else {
        console.log(`Cannot take ${amount}, not enough balance`);
      }
    }
  
    async getBalance() {
      return this.balance;
    }
  }
  
  async function addMoneyLoop(account, amount) {
    while (true) {
      await account.addMoney(amount);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  async function takeMoneyLoop(account, amount) {
    while (true) {
      await account.takeMoney(amount);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  async function run() {
    const account = new BankAccount();
  
    // Start adding threads
    for (let i = 0; i < 4; i++) {
      addMoneyLoop(account, 100);
    }
  
    // Start taking threads
    for (let i = 0; i < 5; i++) {
      takeMoneyLoop(account, 50);
    }
  }
  
  run();
  