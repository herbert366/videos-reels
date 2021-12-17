const listAll = require('./listAll.js')
// const listDone = require('./list done.js')
const listDontDOne = require('./list dont done.js')
const _ = require('lodash')
const { filter } = require('lodash')

// fazer 6 musicas aleatorias hoje

const AllCando = listDontDOne.filter(
  song => song.problem === false && song.song_Name !== 'default'
)

const as6DeHoje = _.sampleSize(AllCando, 6)
console.log(as6DeHoje)
