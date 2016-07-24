'use strict'

const repoFactory = function () {
  let repos = this;
  let repoList = [
    {name: 'task', source: '../module/taskRepository'},
    {name: 'user', source: '../module/userRepository'},
    {name: 'project', source: '../module/projectRepository'}
  ];
  
  repoList.forEach((repo) => {
    repos[repo.name] = require(repo.source);
  });
};

module.exports = new repoFactory;