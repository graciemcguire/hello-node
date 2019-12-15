const getNotes = require('./notes')
// const validator = require('validator')
const chalk = require('chalk')

const command = process.argv[2]
//argv = argument vector

if(command === 'add'){
  console.log('adding note');
} else if (command === 'remove'){
  console.log('removing note');
} else {
  console.log(chalk.bgRed('error!'));
}
