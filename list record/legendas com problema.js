const listAll = require('./listAll')

const Problematic = listAll.filter(song => song.problem === true)
