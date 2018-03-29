'use strict';

const { assert: {isFunction, equal, deepEqual, isArray, isObject} } = require('chai');
const { getAllPrograms, getOneProgram } = require('../program');
const { buildProgramTable } = require('../db/build-table');

describe('programs', () => {
  // beforeEach( (done) => {
  //   buildProgramTable()
  //   .then( () => {
  //     done();
  //   })
  describe('getAllPrograms()', () => {
    it('should be an exported function', () => {
      isFunction(getAllPrograms);
    })
    it('should return an array of objects', () => {
      getAllPrograms()
      .then( (returnedData) => {
        isArray(returnedData, 'not returning an array');
        for(let i=0; i < returnedData.length; i++) {
          isObject(returnedData[i], 'not returning an array of ojects');
        }
      })
    })
  })
  describe('getOneProgram', () => {
    it('should be an exported function', () => {
      isFunction(getOneProgram);
    })
  })
})


