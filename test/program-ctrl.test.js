'use strict';

const { assert: {isFunction, equal, deepEqual, isArray, isObject} } = require('chai');
const { getPrograms } = require('../program-ctrl');
const { getAllPrograms } = require('../program');
const { buildProgramTable } = require('../db/build-table');


describe('program-ctrl', () => {
  describe('getPrograms', () => {
    it('should be an exported function', () => {
      isFunction(getPrograms);
    })
  })
  describe('getPrograms()', () => {
    return getPrograms()
    .then((returnedData) => {
      isArray(returnedData);
    });
    for (let i = 0; i < returnedData.length; i++) {
      isObject(returnedData[i]);
    }
  })
})