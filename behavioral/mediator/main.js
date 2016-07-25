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

const task1 = new Task({
  name: 'Demo',
  user: 'Jane'
});

const notify = new notificationService();
const log = new loggingService();
const audit = new auditingService();