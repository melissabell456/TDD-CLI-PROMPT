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
  describe('getOneProgram()', () => {
    it('should return a single object which matches the id provided', () => {
      return getOneProgram(1)
      .then( (returnedData) => {
        isObject(returnedData, 'not returning an object');
        deepEqual({"program_id": 1, "program_name": "Executive", "instructor_name": "Joe", "start_date": "2018-3-20", "end_date": "2018-7-26", "no_of_seats": 40}, returnedData, 'does not match the program requested');
      })
    })
  })
})


