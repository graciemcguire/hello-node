const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    console.log(chalk.green.inverse('new note added'));
  } else {
    console.log('note title taken');
  }
  saveNotes(notes);
}

const removeNote = (noteTitle) => {
  const notes = loadNotes()
  const filterNotes = notes.filter(note => note.title !== noteTitle)

  if(filterNotes.length === notes.length){
    console.log(chalk.inverse.red('no note found!'));
  } else {
    saveNotes(filterNotes)
    console.log(chalk.inverse.green('note removed!'));
  }
}

const saveNotes = (notesArray) => {
  const notesJSON = JSON.stringify(notesArray)
  fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {

  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()

    return JSON.parse(dataJSON)

  } catch(e) {
    return []
  }
}

const listNotes = () => {
  console.log('your notes: ');
  const notes = loadNotes()
  notes.forEach(note => console.log(chalk.blue(note.title)))
}

const readNote = (title) => {
  const notes = loadNotes()
  const findNote = notes.find(note => note.title === title)
  console.log('title', findNote.title);
  console.log('list', findNote.body);
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
