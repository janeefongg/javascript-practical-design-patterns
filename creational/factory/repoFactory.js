'use strict'

const repoFactory = () => {
  
  this.getRepo = function (repoType) {
    if (repoType === 'task') {
      let taskRepo = require('../module/taskRepository')();
      return taskRepo;
    }
    
    if (repoType === 'user') {
      let userRepo = require('../module/userRepository')();
      return userRepo;
    }
    
    if (repoType === 'project') {
      let projectRepo = require('../module/projectRepository')();
      return projectRepo;
    }
  }
  
}

module.exports = new repoFactory;