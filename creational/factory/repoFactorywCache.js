'use strict'

class repoFactory {

  getRepo (repoType) {
    if (repoType === 'task') {
      if (this.taskRepo) {
        console.log('Retrieving from cache');
        return this.taskRepo;
      } else {
        this.taskRepo = require('../module/taskRepository');
        return this.taskRepo;
      }
    }

    if (repoType === 'user') {
      let userRepo = require('../module/userRepository');
      return userRepo;
    }

    if (repoType === 'project') {
      let projectRepo = require('../module/projectRepository');
      return projectRepo;
    }
  }
};

module.exports = new repoFactory;