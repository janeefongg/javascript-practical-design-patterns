'use strict'

const Task = require('./constructor/task');
const taskRepo = require('./module/taskRepository');
const userRepo = require('./module/userRepository');
const projectRepo = require('./module/projectRepository');


const task1 = new Task(taskRepo.get(1));
console.log(userRepo.get);
let user = userRepo.get(1);
let project = projectRepo.get(1);

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