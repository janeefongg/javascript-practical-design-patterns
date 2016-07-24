'use strict'

const taskHandler = require('./singleton/taskHandler');
const myrepo = require('./singleton/repo');
// var myrepo = repo();

myrepo.save('from main4.js');
myrepo.save('from main4.js');
myrepo.save('from main4.js');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();