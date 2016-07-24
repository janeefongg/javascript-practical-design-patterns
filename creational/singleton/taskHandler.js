'use strict'

const myrepo = require('./repo');

// var myrepo = repo();

const taskHandler = () => {
  return {
    save: function () {
      myrepo.save('Hi from taskhandler');
    }
  }
}

module.exports = taskHandler();