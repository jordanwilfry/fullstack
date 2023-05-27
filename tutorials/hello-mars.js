class Mars{
    constructor(name) {
      this.name = name;
    }
  
    hello() {
      return (`Mars says hello ${this.name}`);
    }
  }
  
  module.exports = Mars;