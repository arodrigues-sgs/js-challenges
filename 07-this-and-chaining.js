// Your job is to modify the following code so that it runs as expected

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    console.log(this.step);
    return this;
  }
};

const newLadder = {...ladder}; // this makes a shallow copy of ladder

ladder.up().down().showStep().up().showStep(); // should show 0 and then 1
newLadder.up().up().down().showStep().down().showStep(); // should show 1 and then 0