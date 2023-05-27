class Venus{
    constructor(name) {
      this.name = name;
    }
  
    hello() {
      return (`Venus says hello ${this.name}`);
    }
  }
  
  module.exports = Venus;