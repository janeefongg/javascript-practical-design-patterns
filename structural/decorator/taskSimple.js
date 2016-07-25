'use strict'

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  
  complete() {
    console.log('Completing task: ' + this.name);
    this.completed = true;
  }
  
  save() {
    console.log('Saving task: ' + this.name);
  }
}

const myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

const urgentTask = new Task('Urgent Task');

//Decorating urgentTask with new functionality so that it doesn't break the original Task
urgentTask.priority = 2;

urgentTask.notify = function () {
  console.log('Notifying important people');
};

urgentTask.complete();

urgentTask.save = function () {
  this.notify();
  Task.prototype.save.call(this);
};

