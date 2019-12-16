// const getNotes = require('./notes')
// const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const notes  = require('./notes.js')

//argv = argument vector
// console.log(process.argv);

yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  }
})

yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler: () => {
    notes.listNotes()
  }
})

yargs.command({
  command: 'read',
  describe: 'read the note?',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  }
})

yargs.parse()

// console.log(yargs.argv);
