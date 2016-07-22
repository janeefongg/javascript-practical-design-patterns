'use strict'

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  // this replaces writing it on the prototype
  complete() {
    console.log('Completing task: ' + this.name);
    this.completed = true;
  }

  save() {
    console.log('Saving task: ' + this.name);
  }
}

module.exports = Task;
