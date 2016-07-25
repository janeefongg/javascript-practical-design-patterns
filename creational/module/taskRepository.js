'use strict'

const repo = function () {

  let db = {};
  
  const get = (id) => {
    console.log('Getting task ' + id);
    return {
      name: 'new task from db'
    }
  };

  const save = (task) => {
    console.log('Saving ' + task.name + ' to the db');
  };

  return {
    get, save
  }
}

module.exports = repo();