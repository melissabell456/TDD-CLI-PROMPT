'use strict';

/** @module program - interacts directly with DB, includes SQL statements */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('programs-cli.sqlite');

/** @method getAllPrograms - takes no arguments, sql query for all programs listed */
module.exports.getAllPrograms = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM programs`, (err, programs) => {
      if (err) reject(err);
      resolve(programs);
    })
  })
};

/**
 * @method getOneProgram - returns object of one requested program
 * @param { integer } id - id should be an integer
 */
module.exports.getOneProgram = ( id ) => {
  return new Promise( (resolve, reject) => {
    db.each(
      `SELECT * FROM programs
      WHERE program_id = ${id}`, (err, program) => {
        if (err) reject(err);
        resolve(program);
      })
  })
}