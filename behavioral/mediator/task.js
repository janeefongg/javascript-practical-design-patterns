'use strict'

class Task {
  constructor(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = false;
  }

  complete() {
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
  }

  save() {
    console.log(`Saving task: ${this.name}`);
  }
}

module.exports = Task;
