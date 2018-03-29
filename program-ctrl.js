'use strict';

/** @module program-ctrl - controller for program data */

const { getAllPrograms } = require('./program');

module.exports.getPrograms = () => {
  return new Promise( (resolve, reject) => {
    getAllPrograms()
    .then(allPrograms => {
      return allPrograms;
    })
    .catch(err => console.log(err));
  })
}
