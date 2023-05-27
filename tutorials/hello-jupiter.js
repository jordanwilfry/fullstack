class Jupiter{
    constructor(name) {
      this.name = name;
    }
  
    hello() {
      return (`Jupiter says hello ${this.name}`);
    }
  }
  
  module.exports = Jupiter;