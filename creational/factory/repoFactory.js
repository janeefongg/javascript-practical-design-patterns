var repoFactory = function () {
  
  this.getRepo = function (repoType) {
    if (repoType === 'task') {
      var taskRepo = require('../module/taskRepository')();
      return taskRepo;
    }
    
    if (repoType === 'user') {
      var userRepo = require('../module/userRepository')();
      return userRepo;
    }
    
    if (repoType === 'project') {
      var projectRepo = require('../module/projectRepository')();
      return projectRepo;
    }
  }
  
}

module.exports = new repoFactory;