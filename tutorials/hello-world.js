class World{
    constructor(name) {
      this.name = name;
    }
  
    hello() {
      return (`World says hello ${this.name}`);
    }
  }
  
  module.exports = World;