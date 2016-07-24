var repoFactory = function () {
  var repos = this;
  var repoList = [
    {name: 'task', source: '../module/taskRepository'},
    {name: 'user', source: '../module/userRepository'},
    {name: 'project', source: '../module/projectRepository'}
  ];
  
  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source);
  });
};

module.exports = new repoFactory;