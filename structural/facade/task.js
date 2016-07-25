'use strict'

class Task {
  constructor(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
  }
};

const TaskService = function () {
  function complete (task) {
    task.completed = true;
    console.log('completing task: ' + task.name);
  };
  
  function setCompleteDate (task) {
    task.completedDate = new Date();
    console.log(task.name + ' completed on ' + task.completedDate);
  };
  
  function notifyCompletion (task, user) {
    console.log('Notifying ' + user + ' of the completion of ' + task.name);
  };
  
  function save (task) {
    console.log('saving Task: ' + task.name);
  };
  
  return {
    complete, setCompleteDate, notifyCompletion, save
  }
}();

var TaskServiceWrapper = function () {

  let completeAndNotify = function (task) {
    TaskService.complete(myTask);
    if (task.completed == true) {
      TaskService.setCompleteDate(task);
      TaskService.notifyCompletion(task, task.user);
      TaskService.save(task);
    }
  }
  return {
    completeAndNotify
  }
}();

var myTask = new Task({
  name: 'MyTask',
  priority: 1,
  project: 'Courses',
  user: 'Jon',
  completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);