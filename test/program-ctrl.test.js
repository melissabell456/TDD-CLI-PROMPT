'use strict';

const { assert: {isFunction, equal, deepEqual, isArray, isObject} } = require('chai');
const { getPrograms, getSingleProgram } = require('../program-ctrl');
const { buildProgramTable } = require('../db/build-table');


describe('program-ctrl', () => {
  // beforeEach( (done) => {
  //   buildProgramTable()
  //   .then( () => {
  //     done();
  //   })
  // })
  describe('getPrograms', () => {
    it('should be an exported function', () => {
      isFunction(getPrograms);
    })
  })
  describe('getPrograms()', () => {
    return getPrograms()
    .then((returnedData) => {
      isArray(returnedData);
      done();
    });
    for (let i = 0; i < returnedData.length; i++) {
      isObject(returnedData[i]);
    }
  })
  describe('getSingleProgram', () => {
    it('should be an exported function', () => {
      isFunction(getSingleProgram);
    })
  })
  describe('getSingleProgram( 1 )', () => {
    it('should return an object', () => {
      getSingleProgram( 1 )
      .then( (returnedData) => {
        isObject(returnedData);
        done();
      })
    })
  })
})