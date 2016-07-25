'use strict'

class Task {
  constructor(data) {
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
    //only the name of task is unique
    this.name = data.name;

    //these properties are not unique and can be shared
    //this.priority = data.priority;
    //this.project = data.project;
    //this.user = data.user;
    //this.completed = data.completed;
  }

  //add to the prototype so that it doesn't look like a flyweight is being used
  getPriority() {
    this.flyweight.priority;
  }
};

function Flyweight(project, priority, user, completed) {
  //these are the pieces of the task that are not unique - share them to save memory
  this.priority = priority;
  this.project = project;
  this.user = user;
  this.completed = completed;
};

const FlyweightFactory = function () {
  let flyweights = {};

  const get = function (project, priority, user, completed) {
    if (!flyweights[project + priority + user + completed]) {
      flyweights[project + priority + user + completed] =
        new Flyweight(project, priority, user, completed);
    }
    return flyweights[project + priority + user + completed];
  };
  
  const getCount = function () {
    let count = 0;
    for (let f in flyweights) count++;
    return count;
  }
  return{
    get: get,
    getCount: getCount
  }
}()

function TaskCollection() {
  let tasks = {};
  let count = 0;
  
  const add = function (data) {
    tasks[data.name] =
      new Task(data);
    count++;
  };
  
  const get = function (name) {
    return tasks[name];
  };
  
  const getCount = function () {
    return count;
  };
  return {
    add: add,
    get: get,
    getCount: getCount
  };
}

const tasks = new TaskCollection();

const projects = ['none', 'courses', 'training', 'project'];
const priorities = [1, 2, 3, 4, 5];
const users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
const completed = [true, false];

const initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 1000000; i++) {
  tasks.add({
    name: 'task' + i,
    priority: priorities[Math.floor((Math.random() * 5))],
    project: projects[Math.floor((Math.random() * 4))],
    user: users[Math.floor((Math.random() * 4))],
    completed: completed[Math.floor((Math.random() * 2))]
  });
};

const afterMemory = process.memoryUsage().heapUsed;
console.log(`used memory ${(afterMemory - initialMemory) / 1000000}`);

console.log(`tasks: ${tasks.getCount()}`);
console.log(`flyweights: ${FlyweightFactory.getCount()}`);