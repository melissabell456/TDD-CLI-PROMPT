'use strict';
const prompt = require('prompt');
const colors = require('colors/safe');
const { getPrograms, getSingleProgram } = require('./program-ctrl');

module.exports.userPrompts = () => {
  prompt.message = colors.rainbow("Welcome the the Bangazon Continuing Ed Course Creator");
  prompt.delimeter = colors.green(">>>");

  prompt.start()

  const userOptions = [
    {
      name: "userSelection",
      description: 
      colors.green("Please choose an action from the following: 1 View All Training Programs. // 2. View One Training Program"),
      pattern: /^[1-7]/, //response must be numbers 1-7
      message: colors.red("Selection invalid: must only be numbers 1-7") //error to show if pattern doesn't match
    },
    {
      name: "query",
      ask: function () {
        return prompt.history('userSelection').value = 2;
      },
      description: colors.green("Please provide the id of the program you would like to view more info on")
    }
  ];
  
  prompt.get(userOptions, (err, result) => {
    if( err) { return onError(err)}
    getData(result.userSelection, result.query);
  });

  const getData = ( userResponse, id ) => {
    if (+userResponse === 1) {
      return getPrograms()
      .then( (programs) => {
        console.log(colors.blue('here are all programs'), programs);
      })
      .catch( err => console.log(err));
    }
    else if(+userResponse === 2) {
      return getSingleProgram(id)
      .then( (program) => {
        console.log(program);
      })
      .catch( err => console.log(err));
    }
  };

  function onError(err) {
    console.error(err);
  }

}