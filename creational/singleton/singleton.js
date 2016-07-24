'use strict'

const TaskRepo = () => {
  let taskRepo;

  const createRepo = () => {
    var taskRepo = new Object("Task");
    return taskRepo;
  };

  const getInstance = () => {
    if (!taskRepo) {
      taskRepo = createRepo();
    }
    return taskRepo;
  }
  
  return {
    getInstance: getInstance
  };
}();

const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();

if (repo1 === repo2){
  console.log("Same TaskRepo")
}