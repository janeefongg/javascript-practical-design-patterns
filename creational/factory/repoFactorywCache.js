var repoFactory = function () {

  this.getRepo = function (repoType) {
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
      var userRepo = require('../module/userRepository');
      return userRepo;
    }

    if (repoType === 'project') {
      var projectRepo = require('../module/projectRepository');
      return projectRepo;
    }
  }
};

module.exports = new repoFactory;