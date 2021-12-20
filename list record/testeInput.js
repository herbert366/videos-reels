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
// put songs Datas in array

function addToArray(songObject) {
  if (!songObject.emAlta) {
    songObject.emAlta = false
  }
  if (!songObject.problem) {
    songObject.problem = false
  }
  if (!songObject.done) {
    songObject.done = false
  }
  if (!songObject.id) {
    songObject.id = 0000
  }
  if (!songObject.reels) {
    songObject.reels = 0000
  }
  if (!songObject.link) {
    songObject.link = ''
  }
  if (!songObject.song_Name) {
    console.log('Nem colocasse o nome da musica')
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
