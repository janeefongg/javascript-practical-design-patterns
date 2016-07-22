'use strict'

var Task = function (name) {
  this.name = name;
  this.compvared = false;

  /*
   Keep in mind:
   Writing methods out is a drawback and not efficient because every time
   Task gets instantiated, the method gets created again.

   Ex:
   this.save = function () {
    console.log('Saving task: ' + this.name)
   }

   Use prototypes.
   */

}

Task.prototype.complete = function () {
  console.log('Completing task: ' + this.name);
  this.completed = true;
}

Task.prototype.save = function () {
  console.log('Saving task: ' + this.name)
}

module.exports = Task;
