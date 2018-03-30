'use strict';

const { programs } = require("../data/programs");
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('programs-cli.sqlite');

module.exports.buildProgramTable = () => {
  return new Promise( (resolve, reject) => {
    db.serialize( () => {
      db.run(`DROP TABLE IF EXISTS programs`);
      db.run(`CREATE TABLE IF NOT EXISTS programs (
        program_id INTEGER PRIMARY KEY,
        program_name TEXT NOT NULL,
        instructor_name TEXT NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL,
        no_of_seats INT )`
      );
      programs.forEach(({ program_name, instructor_name, start_date, end_date, no_of_seats}) => {
        db.run(
          `INSERT INTO programs
          VALUES(null, "${program_name}", "${instructor_name}", "${start_date}", "${end_date}", ${no_of_seats} )`, (err) => {
            if(err) return err;
          }
        )
      });  
    })
  })
  
};