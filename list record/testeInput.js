const array = [
  {
    song_Name: 'default',
    reels: 0000,
    id: 0000,
    emAlta: false,
    problem: false,
    done: false,
    link: '',
  },
]
console.log(array)
// put songs Datas in array

function addToArray(songObject) {
  if (!songObject.emAlta) {
    emAlta = false
  }
  if (!songObject.problem) {
    problem = false
  }
  if (!songObject.done) {
    songObject.done = false
  }
  if (!songObject.id) {
    id = 0000
  }
  if (!songObject.reels) {
    reels = 0000
  }
  if (!songObject.link) {
    link = ''
  }
  if (!songObject.song_Name) {
    console.log('song_Name is required')
  }
  array.push({
    song_Name: songObject.song_Name,
    reels: songObject.reels,
    id: songObject.id,
    emAlta: songObject.emAlta,
    problem: songObject.problem,
    done: songObject.done,
    link: songObject.link,
  })
  return array
}

const songObject = {
  song_Name: 'Scars To Your Beautiful',
  id: 2772881,
  problem: true,
  link: 'https://www.letras.mus.br/alessia-cara/scars-to-your-beautiful/',
}

addToArray(songObject)

console.log(array)
