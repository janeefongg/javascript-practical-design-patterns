'use strict'

const repo = () => {
  let db = {};
  
  const get = (id) => {
    console.log('Getting user ' + id);
    return {
      name: 'Jane Fong'
    }
  };
  
  const save = () => {
    console.log('Saving ' + user.name + ' to the db');
  };
  
  return {
    get, save
  }
}

module.exports = repo();