class GuessingGame {
  constructor() {}

  

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.lastAnswer = max; 
    this.currentAnswer = Math.ceil(this.max / 2); 
    this.diff = this.max - this.currentAnswer; 
  }

  guess() {
    //console.log(this.lastAnswer);
    //console.log(this.currentAnswer);
    console.log(this.diff);
    this.lastAnswer = this.currentAnswer;
    return this.currentAnswer;
  }

  lower() {
    this.diff = Math.ceil(this.diff / 2);
    this.currentAnswer = this.lastAnswer - this.diff;
  }

  greater() {
    this.diff = Math.ceil(this.diff / 2);
    this.currentAnswer = this.lastAnswer + this.diff;
  }
}

module.exports = GuessingGame;
