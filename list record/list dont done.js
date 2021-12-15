const listAll = require('./listAll.js')

const notDone = listAll.filter(song => {
  return song.done === false
})

module.exports = notDone
