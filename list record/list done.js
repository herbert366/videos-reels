const listAll = require('./listAll.js')

const listDone = listAll.filter(song => song.done === true)

console.log(listDone)
module.exports = listDone
