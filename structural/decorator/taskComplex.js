'use strict'

class Task {
  constructor(name) {
    this.name = name;
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

const myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

//sub-class
class UrgentTask extends Task {
  constructor(name, priority) {
    super(name);
    this.priority = priority;
  }

  notify() {
    console.log('Notifying important people');
  }

  save() {
    console.log('Do something special before saving');
    //same as Task.prototype.save.call(this)
    super.save();
  }
};

const ut = new UrgentTask('This is urgent', 1);
ut.complete();
ut.notify();
ut.save();