const getNotes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')

const notes = getNotes()

console.log(notes);
console.log(validator.isURL('test.com'));
console.log(chalk.green('success!'));
