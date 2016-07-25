'use strict'

const Task = require('./task');

//Observers
const notificationService = function () {
  let message = 'Notifying ';
  this.update = function(task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  }
};

const loggingService = function () {
  let message = 'Logging ';
  this.update = function(task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  }
};

const auditingService = function () {
  let message = 'Auditing ';
  this.update = function(task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  }
};

class ObserverList {
  constructor() {
    this.observerList = [];
  }

  add(obj) {
    return this.observerList.push(obj);
  };

  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  };
  
  count() {
    return this.observerList.length;
  };

  removeAt(index) {
    this.observerList.splice(index, 1);
  }

  indexOf(obj, startIndex) {
    let i = startIndex;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }

    return -1;
  };
}


//Observable task
class ObservableTask extends Task {
  constructor(data) {
    super(data);
    this.observers = new ObserverList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  };
  
  notify(context) {
    var observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i)(context)
    }
  };
  
  save() {
    this.notify(this);
    Task.prototype.save.call(this);
  };

  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }
};

const task1 = new ObservableTask({
  name: 'Demo',
  user: 'Jane'
});

const notify = new notificationService();
const log = new loggingService();
const audit = new auditingService();

task1.addObserver(notify.update);
task1.addObserver(log.update);
task1.addObserver(audit.update);

task1.save();

task1.removeObserver(log.update);
task1.save();

