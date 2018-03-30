'use strict';

/** @module program-ctrl - controller for program data */

const { getAllPrograms, getOneProgram } = require('./program');

module.exports.getPrograms = () => {
  return new Promise( (resolve, reject) => {
    getAllPrograms()
    .then(allPrograms => {
      resolve(allPrograms);
    })
    .catch(err => console.log(err));
  })
  
}

module.exports.getSingleProgram = ( id ) => {
  return new Promise( (resolve, reject) => {
    getOneProgram( id )
    .then( (program) => {
      resolve(program);
    })
    .catch(err => console.log(err));
  })
};
