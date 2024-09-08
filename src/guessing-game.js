class GuessingGame {
  constructor() {}

  

  setRange(min, max) {
    this.min = min;
    this.max = max;  
  }

  guess() {    
    this.lastAnswer = Math.ceil((this.min + this.max) / 2);
    return this.lastAnswer;
  }

  lower() {
    this.max =  this.lastAnswer;
  }

  greater() {
    this.min =  this.lastAnswer;
  }
}
module.exports = GuessingGame;
