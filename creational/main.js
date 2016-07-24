var Task = require('./constructor/task');
var taskRepo = require('./module/taskRepository');
var userRepo = require('./module/userRepository');
var projectRepo = require('./module/projectRepository');


var task1 = new Task(taskRepo.get(1));
console.log(userRepo.get);
var user = userRepo.get(1);
var project = projectRepo.get(1);

task1.user = user;
task1.project = project;
// var task2 = new Task({name: 'create a demo for modules'});
// var task3 = new Task({name: 'create a demo for singletons'});
// var task4 = new Task({name: 'create a demo for prototypes'});

// task1.complete();
// task2.save();
// task3.save();
// task4.save();

console.log(task1);
task1.save();