class GuessingGame {
  constructor() {}

  

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.lastAnswer = max; 
    this.currentAnswer = this.max / 2; 
    this.diff = this.max - this.currentAnswer; 
  }

  guess() {    
    this.lastAnswer = this.currentAnswer;
    return this.currentAnswer;
  }

  lower() {
    this.diff = this.diff / 2;
    this.currentAnswer = this.lastAnswer - this.diff;
  }

  greater() {
    this.diff = this.diff / 2;
    this.currentAnswer = this.lastAnswer + this.diff;
  }
}

module.exports = GuessingGame;
