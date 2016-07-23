'use strict'

var Repo = require('../module/taskRepository');

class Task {
  constructor(data) {
    this.name = data.name;
    this.completed = false;
  }

  // this replaces writing it on the prototype
  complete() {
    console.log('Completing task: ' + this.name);
    this.completed = true;
  }

  save() {
    console.log('Saving task: ' + this.name);
    Repo.save(this);
  }
}

module.exports = Task;
