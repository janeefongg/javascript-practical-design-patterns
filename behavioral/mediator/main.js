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

let mediator = (function() {
  let channels = {};

  let subscribe = function (channel, context, func) {
    if (!mediator.channels[channel]) {
      mediator.channels[channel] = [];
    }

    mediator.channels[channel].push({
      context: context,
      func: func
    });
  };

  let publish = function (channel) {
    if (!this.channels[channel]) {
      return false;
    }
    
    let args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < mediator.channels[channel].length; i++) {
      let sub = mediator.channels[channel][i];
      sub.func.apply(sub.context, args);
    }
  };

  return {
    channels: {},
    subscribe: subscribe,
    publish: publish
  };

})();

const task1 = new Task({
  name: 'Demo',
  user: 'Jane'
});

const notify = new notificationService();
const log = new loggingService();
const audit = new auditingService();


mediator.subscribe('complete', notify, notify.update);
mediator.subscribe('complete', log, log.update);
mediator.subscribe('complete', audit, audit.update);

task1.complete = function () {
  mediator.publish('complete', this);
  Task.prototype.complete.call(this);
};

task1.complete();